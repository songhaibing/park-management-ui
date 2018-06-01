

<template>
  <div class="container" >
    <br>
    <div class="image-text" >
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
      蓝色技术工作室
    </div>
    <br>
    <van-cell-group>
      <div class="apply" >
        <van-cell title="我的申请" is-link @click="onclick"/>
      </div>
    </van-cell-group>
    <div class="exit-button" >
      <Button type="primary" shape="circle" size="large" @click="exit">退出</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        form:{
          token:sessionStorage.token
        }
      }
    },
    methods: {
      exit() {
        let that =this
        let params = that.form
        that.$HTTP.post(that.$API.logout,params,function (res) {
          that.$router.push('/login')
          //清除token
          sessionStorage.clear()
        })

      },
      onclick(){

        this.$router.push('/MyApply')
      }

    }
  }
</script>

<style scoped>
  .image-text{
    font-size: 22px;
    background-color: #fff;
    line-height: 80px;
    padding-left: 20px
  }
  .apply{
    font-family:PingFangSC-Regular;
    font-size: 14pt;
    color: rgb(68 68 68)
  }
  .exit-button{
    position:absolute;
    bottom:55px;
    width: 100%;
    text-align: center
  }

</style>


