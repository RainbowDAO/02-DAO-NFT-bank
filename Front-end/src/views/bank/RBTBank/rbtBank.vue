<template>
  <div class="rbt-bank">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="bank-panel-header">
          <span>My Token Asset</span>
          <span class="erc-info erc-info-r">ERC20</span>
        </div>
      </template>
      <template v-slot:content>
        <div class="my-assets-info">
          <div>My Token Amount</div>
          <div class="rbt-number">
            <strong class="r-font-color">{{ userAmount / 10 ** 18 |formatNumberTo }} <span>Token</span></strong>
          </div>
          <div>
            <strong style="margin-left: 10px;" class="r-g-color">USDT:</strong> <span>$ {{
              userAmount * 0.4 | formatNumber
            }}</span>
          </div>
        </div>
        <el-button class="button1 pre-button" size="small" @click="approve">Approve</el-button>
        <el-button class="button1 pre-button" size="small" @click="dialogVisible = true">Staking</el-button>
      </template>
    </RainbowPanel>
    <RainbowPanel>
      <template v-slot:name>
        <div class="title">
          My Deposit Token

        </div>
      </template>
      <template v-slot:content>
        <div class="data" v-loading="loading">
          <div v-for="item in camArr" :key="item.index">
            <TableItem :tableData="item" operateRName="withdraw" @operateRClick="withdraw" operate-g-name="SELL"
                       @operateGClick="handleSell(item)" operate-o-name="BORROW"
                       @operateOClick="mortTap(item)"/>
          </div>
          <div class="no-data" v-show="camArr.length==0">
            <img src="../../../assets/img/no-data.png" alt="">
          </div>
        </div>
      </template>
    </RainbowPanel>
    <el-dialog
        title="Stake"
        :visible.sync="dialogVisible"
        class="dialog"
        width="380px"
    >
      <div class="line">
        <strong>Stake type</strong>
        <el-select v-model="chooseMonth" @change="monthChange" placeholder="stake date" size="mini" class="select">
          <el-option
              v-for="item in monthsArr"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="line"><strong>Stake assets</strong> <span></span></div>
      <div class="line"><span>MY RBT</span> <span>Balance: {{ userAmount / 10 ** 18 |formatNumber }}</span></div>

      <div class="input-box">
        <el-input class="input2" type="number"  size="small" v-model="amount"></el-input>
        <el-button @click="setMax">MAX</el-button>
      </div>
      <div class="line">
        <el-button @click="dialogVisible=false">cancel</el-button>
        <el-button @click="subPledge">stake</el-button>
      </div>
    </el-dialog>
    <el-dialog
        title="Sell Message"
        :visible.sync="isShowSell"
        width="400px"
    >
      <div class="order">
        <div class="price-box">
          <span>from</span>
          {{sellForm.from}}
        </div>
        <div class="price-box">
          <span>tokenId</span>
          <div class="input-box">
            {{sellForm.tokenId}}
          </div>
        </div>
        <div class="price-box">
          <span>sellPrice</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="sellForm.sellPrice"></el-input>
          </div>
        </div>
        <div class="price-box">
          <span>_types</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="sellForm._types"></el-input>
          </div>
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="isShowSell=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="sellToken">Submit</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog
        title="Borrow Message"
        :visible.sync="mortgageMarketDialog"
        width="400px"
    >
      <div class="order">
        <div class="price-box">
          <span>tokenId</span>
          {{mortForm.tokenId}}

        </div>
        <div class="price-box" >
          <span>amount</span>
          <div class="input-box" >
            <el-input class="input2" size="mini" v-model="mortForm.amount"></el-input>
          </div>
        </div>
        <div class="price-box">
          <span>day</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="mortForm.day"></el-input>
          </div>
        </div>
        <div class="price-box">
          <span>dayRate</span>
          <div class="input-box">
            <el-input class="input2" size="mini" v-model="mortForm.dayRate"></el-input>
          </div>
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="mortgageMarketDialog=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="mortgageMarket">Submit</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TableItem from "../../../components/TableItem";
import {mapGetters} from "vuex";
import moment from "moment"
import getContract from "../../../utils/abiUtil";

export default {
  name: "RBTBank",
  components: {TableItem},
  data() {
    return {
      isShowSell:false,
      mortgageMarketDialog:false,
      mortForm:{},
      sellForm:{},
      tableData: [],
      camArr:[],
      bankTokenArr: [],
      userAmount: 0,
      updateTable: false,
      subAmount: 0,
      amount: 0,
      arr1: [],
      arr2: [],
      dialogVisible: false,
      monthsArr: [{label: "active", value: 0}, {label: "Three months", value: 3}, {label: "Six months ", value: 6},
        {label: "Twelve months ", value: 12}, {label: "Twenty-four months", value: 24}, {
          label: "Thirty-six months",
          value: 36
        }],
      chooseMonth: null,
      selectIndex: null,
      allowance: 0,
      isShowRecord: false,
      loading: false,

      amount721: 0,
      stakingamount: [4],
      bankAddr: null
    }
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'web3'
    ]),

    consensusRecords() {
      return this.$store.state.consensus.records;
    },
  },

  watch: {
    isConnected() {
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
      this.camArr =arr
    }
  },
  methods: {
    handleSell(item){
      this.isShowSell=true;
      this.sellForm.from = this.account.toString()
      this.sellForm.tokenId = this.tableData[item.index-1].tokenId
      this.sellForm._types = getContract.getContractAddress("RbtDeposit721")
    },
    mortgageMarket(){
      //tokenId,amount,day,dayRate
      this.$store.dispatch("RbtDeposit721/approve",{
        _to:getContract.getContractAddress("LoanMarket"),
        _tokenId:this.mortForm.tokenId
      }).then(()=>{
        this.$store.dispatch("LoanMarket/mortgageMarket", {
          ...this.mortForm
        }).then(()=>{
          alert("success")
          this.isShowSell=false
        })
      })
    },
    async sellToken(){
      // from,tokenId,sellPrice,_types
      await this.$store.dispatch("TokenExchangeMarket/sellToken", {
        ...this.sellForm
      }).then(()=>{
        alert("success")
        this.getDeposit()
        this.isShowSell=false
      }).catch(err=>{
        alert(err)
        this.isShowSell=false
      })
    },
    mortTap(item){
      this.mortgageMarketDialog = true
      this.mortForm.tokenId= this.tableData[item.index-1].tokenId.toString()
    },
    monthChange() {

    },
    setMax() {
      this.amount = this.userAmount
    },
    async getDeposit() {
      if (!this.isConnected) {
        return;
      }
      await this.$store.dispatch("RbtDeposit721/totalSupply").then(async length => {
        this.loading = true
        let tempArr = []
        for (let i = 0;i<length;i++){
          let tempObj = {}
          tempObj.tokenId = i
          await this.$store.dispatch("RbtDeposit721/ownerOf", i+1).then(async res => {
            tempObj.ownerOf = res
            if(res.toUpperCase() == this.account.toUpperCase()){
              await this.$store.dispatch("RbtDeposit721/amount", i+1).then(res => {
                tempObj.amount = res
              })

              await this.$store.dispatch("RbtDeposit721/tokenMetadata", i+1).then(res => {
                tempObj.tokenMetadata = moment(parseInt(res.startTime) * 1000).format('YYYY/MM/DD hh:mm:ss');
              })
              tempArr.push(tempObj)
            }
          })
        }
        this.tableData = tempArr
        this.loading=false
      })

    },

    async initData() {
      if (!this.isConnected) {
        return;
      }
      await this.$store.dispatch("RbBankOrchestrator/bank").then(res => {
        this.bankAddr = res
      })
      await this.$store.dispatch('RBT/balanceOf', this.$store.state.app.account).then(res => {
        this.userAmount = res
      })
      this.$store.dispatch("RbtDeposit721/balanceOf", this.$store.state.app.account).then(res => {
        this.amount721 = res
      })

      this.$store.dispatch("RbtDeposit721/tokenMetadata", 1).then(res => {
        this.stakingamount = res.amount
      })
      this.getDeposit()
    },

    withdraw(item) {
      this.$store.dispatch("RainbowBank/withdrawa", {
        to: this.account,
        tokenId: item.index,
        address: this.bankAddr
      }).then(() => {
        this.$message.success()
      }).catch(err => {
        this.$message.error(err)
      })
    },
    approve() {
      this.$store.dispatch("RBT/approve", {
        spender: this.bankAddr,
        amount: "10000000000000000000000"
      })
    },
    subPledge() {
      this.$store.dispatch("RainbowBank/depositToken", {
            to: this.$store.state.app.account,
            month: this.chooseMonth,
            value: this.amount,
            address: this.bankAddr
          }
      ).then(() => {
        alert("depositToken success")
        this.getDeposit()
        this.dialogVisible = false
      }).catch((err) => {
        console.log(err)
        alert(err)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.rbt-bank {
  min-height: calc(100vh - 160px);
  margin-top: -60px;
  .rbt-deposit {
    margin-top: 20px;
  }

  .dialog {
    .select {
      width: 120px;
    }

    .line {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;

      .el-button {
        width: 210px;
        height: 42px;
        border-radius: 10px;
      }

      .el-button:last-child {
        color: white;
        background: linear-gradient(225deg, #7700ff, #c4c4c4);
      }
    }

    .input-box {
      padding: 2px 4px;
      border-radius: 4px;
      border: 1px solid #eee;
      background: #F8F8F8;
      display: flex;

      .active {
        ::v-deep .el-input__inner {
          font-weight: bold;
          font-size: 14px;
        }
      }

      .el-button {
        width: 40px;
        font-size: 10px;
        height: 32px;
        padding: 6px;
        color: white;
        background: linear-gradient(225deg, #7700ff, #ed6868);
        border-radius: 5px;
      }
    }

  }

  .my-assets-info {
    margin: 10px auto;
    height: 100px;
    width: 300px;
    text-align: center;
    justify-content: center;
    font-size: 14px;

    .rbt-number {
      font-size: 22px;
      margin: 4px 0;

      span {
        font-size: 16px;
      }
    }
  }

  .pre-button {
    width: 96px;
  }

  .account-data {
    margin: 40px auto;
    width: 60%;
    min-width: 800px;
  }

  .pledge {
    margin: 40px auto;
    min-width: 450px;

    .operating {
      display: flex;
    }

    .submit-button {
      margin-top: 20px;
      min-width: 300px;
    }

    .allow {
      margin-top: 20px;
      min-width: 200px;
      width: 36%;

    }
  }
}
</style>
