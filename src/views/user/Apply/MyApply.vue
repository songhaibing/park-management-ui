
<template>
  <div class="container">
    <div class="title">
      <van-nav-bar
        title="我的申请"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <card style="margin-top: 10px" v-for="item in ApplyData" :key="item.id">
      <p class="MyApply-title">红绿蓝众创空间 - {{item.requestAddress}}</p>
      <span class="MyApply-text">{{statusCode[item.status]}}</span>
      <p class="MyApply-font">使用时间{{item.requestUseTime}} {{item.personNumber}}人参会</p>
      <p class="MyApply-font">手机号码{{item.contactWay}}</p>
    </card>

  </div>

</template>

<script>
  import statusCode from '../../../lib/status.js'
  export default {
    name: "my-apply",
    components:{},
    data(){
      return{
        statusCode:statusCode,
        form:{
          token:sessionStorage.token
        },
        ApplyData:'',
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      init () {
        let that = this;
        let params = that.form
        that.$HTTP.post(that.$API.getPublicFacilityList,params,function (res) {
          that.ApplyData = res
        })
      }
    },
    mounted(){
      this.init()
    }
  }
</script>

<style scoped>
  .MyApply-title{
    font-family: PingFangSC-Medium;
    font-size: 18pt;
    color: rgb(39 38 54)
  }
  .MyApply-text{
    float: right;
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    color: rgb(205 196 196)
  }
  .MyApply-font{
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    color: rgb(205 196 196)
  }

</style>



