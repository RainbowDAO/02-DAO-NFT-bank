<template>
  <div class="borrowingMessage">
    <RainbowPanel  v-loading="loading">
      <template v-slot:name>Publish loan information</template>
      <template v-slot:content>
        <div v-for="(item,index) in camArr" :key="index">
          <TableItem :tableData="item" operate-g-name="LEND"
                     @operateGClick="lendDialog=true;currentId = item.index"
                  />

        </div>
        <div class="no-data" v-show="camArr.length==0">
          <img src="../../../assets/img/no-data.png" alt="">
        </div>
      </template>
    </RainbowPanel>
    <el-dialog
        title="Borrow Message"
        :visible.sync="lendDialog"
        width="400px"
    >
      <div class="order">
        <div class="price-box">
          <span>tokenId</span>
          <strong> {{ currentId }}</strong>
        </div>
        <div class="price-box">
          <span>lend value</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="lendValue"></el-input>
          </div>
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="lendDialog=false;">Cancel</el-button>
          <el-button size="small " class="button1" @click="lend">Submit</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import moment from "moment";
import TableItem from "../../../components/TableItem";
export default {
  name: "borrowingMessage",
  components: {TableItem},

  data() {
    return {
      currentId:'',
      lendValue:'',
      loading:false,
      borrowToken: {},
      lendDialog:false,
      orderForm: {},
      mortForm:{},
      sellForm:{ },
      currentData: {},
      tokenAmount: 0,
      tokenHolder: undefined,
      currentObj: {},
      tableData: [],
      camArr: []
    }
  },
  methods: {
    mortTap(item){
      console.log(item)
      this.mortgageMarketDialog = true
      this.mortForm.tokenId= this.tableData[item.index].tokenId.toString()
    },
    lend() {
      this.$store.dispatch("LoanMarket/lend", {
        id: this.currentId.toString(),
        value: this.lendValue.toString()
      }).then(res => {
        console.log(res)
        alert("Loan success")
      }).catch(err => {
        console.log(err)
        alert(err)
      })
    },

    async initData() {
      if (!this.isConnected) {
        return;
      }
      this.sellForm.from = this.account
      this.loading=true
      await this.$store.dispatch("LoanMarket/length").then(async length=>{
        for (let i = 0;i<length;i++){
          await this.$store.dispatch("LoanMarket/list", i).then(res => {
            console.log(res)
            res.tokenMetadata = moment(parseInt(res.startTime) * 1000).format('YYYY/MM/DD hh:mm:ss');
            this.tableData.push(res)
          })
        }
      })
      this.loading=false
    },
    changeToken(param) {
      console.log(param)
    },

  },

  created() {
    if (this.isConnected) {
      this.initData()
    }
  },

  watch: {
    account() {
      this.initData()
    },
    tableData() {
      let arr = []
      this.tableData.forEach((item, index) => {
        let obj = {
          index: index + 1,
          nameObj: {
            title: "TokenId",
            data:item.tokenId
          },
          infoArr: [
            {
              title: "amount",
              data: item.amount
            },
            {
              title: "owner",
              data: item.owner
            },
            {
              title: "contango",
              data: item.contango
            },
            {
              title: "dayRate",
              data: item.dayRate + '%'
            },
            {
              title: "interest",
              data: item.interest
            },
          ],
          detailArr: [],

        }
        arr.push(obj)
      })
      this.camArr =arr
    }

  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  }
}
</script>

<style lang="scss" scoped>
.borrowingMessage {
  min-height: calc(100vh - 160px);
  margin-top: -60px;
  .my-borrow {
    margin-top: 20px;
  }

  .order {
    .tip {
      display: flex;
      justify-content: space-between;

      span:first-child {
        color: #736DFF;
      }
    }

    > div {
      margin-top: 10px;
    }

    .price-box {
      width: 380px;
      background: #f8f8f8;
      border: 1px solid #eaeaea;
      border-radius: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 20px;

      .input-box {
        width: 260px;
        height: 30px;
        align-items: center;
        padding: 0 10px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        display: flex;

        ::v-deep .el-input__inner {
          padding: 0 0;
        }
      }
    }

    .operating {
      display: flex;
      justify-content: space-between;

      .el-button {
        width: 150px;
      }
    }
  }
}
</style>
