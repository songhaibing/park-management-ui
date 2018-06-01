

<template>
  <div class="container">
    <!--title标题-->
    <div class="title" >
      <van-nav-bar
        title="入驻申请进度查询"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>

    <div class="connection" >
      联系方式
    </div>
    <!--表单-->
    <van-cell-group>
      <van-field
        v-model="formValidate.responsibilityName"
        label="姓名"
        placeholder="请输入真实姓名"
        required
      />
      <van-field
        v-model="formValidate.responsibilityPhoneNumber"
        label="手机号"
        placeholder="请输入手机号"
        required
      />
    </van-cell-group>
    <!--查询按钮-->
    <div class="inquire-button"  @click="search">
      <Button  class="search" type="primary" shape="circle"  long>立即查询</Button>
    </div>
    <div class="text" >
      提交成功后，我们会尽快与您取得联系
    </div>
    <!--页脚-->
    <div class="footer">
      <a>蓝色技术工作室</a>© {{date}}
    </div>
  </div>

</template>

<script>
  export default {
    name: "applySchedule",
    data() {
      return {
        date: '',//年份
        // 写出对象模式好传数据给后台
        formValidate: {
          responsibilityName: '',//姓名
          responsibilityPhoneNumber: '',//手机号码
        },
      }
    },
    methods: {
      //返回
      onClickLeft() {
        this.$router.go(-1)
      },
      search() {
        let that = this;
        //手机号码正则匹配
        const phoneTest = new RegExp("^1[3|4|5|7|8][0-9]{9}$");
        //表单验证
        if (this.formValidate.responsibilityName !== '' && this.formValidate.responsibilityPhoneNumber !== '') {
          if (phoneTest.test(that.formValidate.responsibilityPhoneNumber)) {
            let params=that.formValidate;
            this.$HTTP.get(this.$API.applicationStatusQuery,params,function(res){
             sessionStorage.responsibilityName=res.responsibilityName;
             sessionStorage.responsibilityPhoneNumber=res.responsibilityPhoneNumber;
             sessionStorage.status = res.status
              that.$router.push('/ApplyInquire')
            })
          }
          else {
            that.$Message.error('请填写正确的手机号码');
          }
        }
        else {
          that.$Message.error('请填写相关信息');
        }
      }
    },
    mounted() {
      //动态获取年份
      let date = new Date();
      this.date = date.getFullYear()
    },
  }
</script>

<style scoped>
  .container{
    background-color: rgb(248, 247, 247);
    height: 100%;
  }
  .title{
    font-family: PingFangSC-Medium;
    font-size: 40px;
    font-weight: 600
  }
  .connection{
    line-height: 30px;
    margin-left: 10px;
    color: rgb(153 153 153);
  }
  .inquire-button{
    padding: 25px;
  }
  .search {
    padding: 10px;
  }
  .text{
    text-align: center;
    size: 12px;
    color:rgb(153 153 153)
  }
  .footer{
    position:absolute;
    bottom:20px;
    width: 100%;
    text-align: center
  }

</style>


