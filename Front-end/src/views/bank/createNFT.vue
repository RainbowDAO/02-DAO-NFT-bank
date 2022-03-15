<template>
  <div class="create-NFT">
    <div class="create-NFT-title">
      CREATE DAO NFT BANK
    </div>
    <div class="name-box single-line">
      <div class="title">
        NFT Bank Name
      </div>
      <input type="text" placeholder="Name">
    </div>
    <div class="create-tip">
      <div class="title">
        DAO Token Address
      </div>
      <div class="content">
        Create a new ERC-20 token for your DAO, or use an existing one
      </div>
    </div>
    <div class="choose-nav">
      <div class="item" :class="{'active':chooseIndex==0}" @click="chooseIndex=0">
        New Token
      </div>
      <div class="item" :class="{'active':chooseIndex==1}" @click="chooseIndex=1">
        Existing Token
      </div>
    </div>
    <div class="nft-info-box1" v-show="chooseIndex==0">
      <div class="floor">
        <div class="input-box">
          <div class="title">
            Token Name
          </div>
          <input type="text" placeholder="ADDRESS">
        </div>
        <div class="input-box">
          <div class="title">
            Symbol
          </div>
          <input type="text" placeholder="MOT">
        </div>

      </div>
      <div class="floor">
        <div class="input-box">
          <div class="title">
            Amount
          </div>
          <input type="text" placeholder="0">
        </div>
        <div class="input-box">
          <div class="title">
            Decimals
          </div>
          <input type="text" placeholder="10">
        </div>
      </div>
      <div class="token-holder-list">
        <div class="title">
          Token Holders
        </div>
        <div class="item single-line">
          <input type="text" placeholder="Account address1">
          <div class="add-btn" @click="addressAmount++">
            +
          </div>
        </div>
        <div class="item single-line" v-for="item in (addressAmount-1)" :key="item">
          <input type="text" :placeholder="'Account address'+(item+1)" >
        </div>
      </div>
      <div class="mortgage-choose">
        <div class="title">
          Mortgage Time Setting
        </div>
        <select class="rainbow-select" v-model="timeChooseIndex" @change="getTimeSelected">
          <option selected value="0"> 1 year</option>
          <option value="1">2 year</option>
        </select>
        <div class="down-coin">
          <img src="../../assets/img/common_arrow_down.png" alt="">
        </div>
      </div>
      <div class="single-line">
        <div class="title">
          Generate NFT Name
        </div>
        <input type="text" placeholder="Name">
      </div>
      <div class="single-line">
        <div class="title">
          NFT Address
        </div>
        <input type="text" placeholder="Address">
      </div>
      <div class="single-line">
        <div class="title">
          Manage Address
        </div>
        <input type="text" placeholder="Address">
      </div>
    </div>
    <div class="nft-info-box1" v-show="chooseIndex==1">

      <div class="token-holder-list">
        <div class="title">
          Token Holders
        </div>
        <div class="item single-line">
          <input type="text" placeholder="Account address1">
          <div class="add-btn" @click="addressAmount++">
            +
          </div>
        </div>
        <div class="item single-line" v-for="item in (addressAmount-1)" :key="item">
          <input type="text" :placeholder="'Account address'+(item+1)" >
        </div>
      </div>
      <div class="mortgage-choose">
        <div class="title">
          Mortgage Time Setting
        </div>
        <select class="rainbow-select" v-model="timeChooseIndex" @change="getTimeSelected">
          <option selected value="0"> 1 year</option>
          <option value="1">2 year</option>
        </select>
        <div class="down-coin">
          <img src="../../assets/img/common_arrow_down.png" alt="">
        </div>
      </div>
      <div class="single-line">
        <div class="title">
          Generate NFT Name
        </div>
        <input type="text" placeholder="Name">
      </div>
      <div class="single-line">
        <div class="title">
          NFT Address
        </div>
        <input type="text" placeholder="Address">
      </div>
      <div class="single-line">
        <div class="title">
          Manage Address
        </div>
        <input type="text" placeholder="Address">
      </div>
    </div>
    <div class="compile-btn rainbow-btn">
      Compile
    </div>
  </div>
</template>

<script>
export default {
  name: "createNFT",
  data() {
    return {
      chooseIndex: 0,
      timeChooseIndex: 0,
      addressAmount: 1
    }
  },
  methods: {
    getTimeSelected() {

    }
  }
}
</script>

<style lang="scss" scoped>
$glass: rgba(255, 255, 255, 0.2);
$glass-icon: rgba(255, 255, 255, 0.3);
$gradient: linear-gradient(35deg, red, purple);
.rainbow-select {
  appearance: none;
  outline: 0;
  font: inherit;
  width: 300px;
  height: 40px;
  padding: 0 10px;
  background: #f6f5fa;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  &:after{

  }
  option {
    padding: 10px;
    color: inherit;
    background: #f6f5fa;
  }

  /* Remove focus outline */
  &:focus {
    outline: none;
  }

  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
}

.create-NFT {
  width: 1000px;
  margin: -60px auto 30px;
  padding: 30px;
  background: #fff;
  border-radius: 10px;

  .create-NFT-title {
    width: 337px;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    line-height: 50px;
  }

  .title {
    font-weight: bold;
    line-height: 50px;
    font-size: 16px;
  }

  input {
    width: 300px;
    height: 40px;
    background: #f6f5fa;
    padding: 0 10px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
  }
  .single-line{
    input{
      width: 630px;
    }
  }
  .mortgage-choose{
    position: relative;
    .down-coin{
      img{
        width: 16px;
        height: 10px;
        position: absolute;
        z-index: 2;
        left: 260px;
        top: 66px;
        pointer-events: none;
      }

    }
  }
  .create-tip {
    padding-bottom: 30px;

    .content {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #bcbcbc;
      line-height: 16px;
    }
  }

  .choose-nav {
    width: 280px;
    height: 40px;
    background: #f6f5fa;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    display: flex;

    .item {
      text-align: center;
      font-weight: bold;
      width: 50%;
      line-height: 40px;
      cursor: pointer;
    }

    .active {
      height: 100%;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 5px;
      color: #fff;
    }
  }

  .floor {
    display: flex;

    > div {
      margin-right: 30px;
    }
  }

  .token-holder-list {
    .item{
      margin-top: 10px;
      display: flex;
      .add-btn {
        margin-left: 30px;
        width: 50px;
        cursor: pointer;
        height: 40px;
        border-radius: 10px;
        font-size: 33px;
        text-align: center;
        line-height: 40px;
        background: #f6f5fa;
      }
    }

  }
  .compile-btn{

  }
}
</style>
