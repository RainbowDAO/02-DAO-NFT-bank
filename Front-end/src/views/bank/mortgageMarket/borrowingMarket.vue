<template>
  <div class="borrowingMarket">
    <RainbowPanel class="market">
      <template v-slot:name>
        Token Market
      </template>
      <template v-slot:content>
        <div v-for="(item,index) in camArr" :key="index">
          <TableItem :tableData="item"
                     operate-o-name="Approve"
                     @operateOClick="approve"
                     operate-r-name="buy"
                     @operateRClick="buyDialog = true;currentId = index+1"/>
        </div>
        <div class="no-data" v-show="camArr.length==0">
          <img src="../../../assets/img/no-data.png" alt="">
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="my-order">
      <template v-slot:name>
        My Order
      </template>
    </RainbowPanel>
    <el-dialog
        title="Borrow Message"
        :visible.sync="buyDialog"
        width="400px"
    >
      <div class="order">
        <div class="price-box">
          <span>tokenId</span>
          <strong> {{ currentId }}</strong>
        </div>
        <div class="price-box">
          <span>buy value</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="buyValue"></el-input>
          </div>
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="buyDialog=false;">Cancel</el-button>
          <el-button size="small " class="button1" @click="buy">Submit</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
// import moment from "moment";
import TableItem from "../../../components/TableItem";
import getContract from "../../../utils/abiUtil"

export default {
  name: "borrowingMarket",
  components: {TableItem},
  data() {
    return {
      currentId: null,
      buyDialog: false,
      buyValue: 0,
      currentPage: 1,
      pagesize: 5,
      currentPage2: 1,
      pagesize2: 5,
      tableData: [],
      camArr: [],
      buyForm: {}
    }
  },
  created() {
    this.initData()
  },
  methods: {

    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleSizeChange2(val) {
      this.pagesize2 = val;
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
    },
    isLiquidation(token) {
      return ((new Date()).getTime() - token.expireTime * 1000) < 0
    },
    async initData() {
      if (!this.isConnected) {
        return;
      }

      await this.$store.dispatch("TokenExchangeMarket/listLength").then(async length=>{
        console.log(length)
        for (let i = 0;i<length;i++){
          await this.$store.dispatch("TokenExchangeMarket/list", i).then(res => {
           this.tableData.push(res)
          })
        }
      })
    },
    liquidation(id) {
      console.log(id)
      this.$store.dispatch("mortGageLoan/liquidation", id).then(res => {
        console.log(res)
        this.$message.success("Successful liquidation")
      }).catch(err => {
        console.log(err)
        this.$message.error("Liquidation failure" + err)
      })
    },
    borrowAgain(id) {
      this.$store.dispatch("LoanMarket/repayment", id).then(res => {
        console.log(res)
        this.$message.success("Successful re borrowing")
      }).catch(err => {
        console.log(err)
        this.$message.error("Failed to borrow again" + err)
      })
    },
    approve() {
      this.$store.dispatch("RBT/approve", {
        spender: getContract.getContractAddress("TokenExchangeMarket"),
        amount: "10000000000000"
      })
    },
    buy() {
      this.$store.dispatch("TokenExchangeMarket/bidToken", {
        from:this.account,
        id: this.currentId.toString(),
        bid: this.buyValue.toString(),
        _types:getContract.getContractAddress("RbtDeposit721")
      }).then(res => {
        console.log(res)
        alert("Loan success")
      }).catch(err => {
        console.log(err)
        alert(err)
      })
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),

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
            data: item.tokenId
          },
          infoArr: [
            {
              title: "amount",
              data: item.amount
            },
            {
              title: "ownerOf",
              data: item.ownerOf
            },
            {
              title: "tokenMetadata",
              data: item.tokenMetadata
            },
          ],
          detailArr: [],

        }
        arr.push(obj)
      })
      this.camArr = arr
    }
  },
}
</script>

<style lang="scss" scoped>
.borrowingMarket {
  min-height: calc(100vh - 160px);
  margin-top: -90px;
  .market {
    margin-top: 20px;
  }
}
</style>
