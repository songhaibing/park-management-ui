<style scoped>
  @import "user.css";
</style>

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


