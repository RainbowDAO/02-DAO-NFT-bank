<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";
#app {
  .rainbow-btn{
    text-align: center;
    width: 160px;
    height: 40px;
    background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border: 1px solid #eaeaea;
    border-radius: 10px;
    line-height: 40px;
    margin-top: 20px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    &:active{
      transform: translate(2px, 2px);
    }
  }
  .no-data {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #999;
  }
  .price-box{
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .input2{
    font-weight: bold;
    font-size: 16px;
    border: 1px solid #eee;
  }
  .operating{
    display: flex;
    justify-content: space-between;
  }
}
</style>
