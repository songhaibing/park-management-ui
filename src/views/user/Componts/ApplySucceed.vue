


<template>
  <div class="container" >
    <div class="title" >
      <van-nav-bar
        title="申请成功"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <div class="connection">
      <i-circle :percent="schedule">
        <icon type="ios-checkmark-empty" size="60" style="color:rgb( 75 165 245)"></icon>
      </i-circle>
      <p class="connection-font" >提交成功后，我们会尽快与您取得联系</p>
      <div class="footer" >
        <a>蓝色技术工作室</a>© {{date}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "apply-succeed",
    data() {
      return {
        date:'',
        schedule:100
      }
    },
    methods: {
      //返回
      onClickLeft() {
        this.$router.go(-1)
      }
    },
    mounted(){
      //动态获取年份
      let date = new Date();
      this.date = date.getFullYear()
    }
  }
</script>

<style scoped>
  .connection{
    text-align: center;
    margin-top: 147px;
  }
  .connection-font{
    margin-top: 35px;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: rgb(153 153 153);

  }

</style>


