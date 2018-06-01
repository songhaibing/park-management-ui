
<template>
  <div class="container" >
    <!--标题title-->
    <div class="title" >
      <van-nav-bar
        title="入驻申请"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div  class="connection" >
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
      <van-field
        v-model="formValidate.projectName"
        label="项目名称"
        placeholder="请输入项目名称"
        required
      />
      <van-field
        v-model="formValidate.college"
        label="所属学院"
        placeholder="请输入所属学院"
        required
      />
    </van-cell-group>
    <!--提交申请按钮-->
    <div class="inquire-button"  @click="submit">
      <Button  class="search" type="primary" shape="circle"  long>提交申请</Button>
    </div>
    <div class="text" >
      提交成功后，我们会尽快与您取得联系
    </div>
    <!--页脚-->
    <div class="footer" >
      <a>蓝色技术工作室</a>© {{date}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "enterApply",
    data() {
      return {
        date:'',//年份
        formValidate: {
          responsibilityName: '',//姓名
          responsibilityPhoneNumber: '',//手机号码
          college:'',//所属学院
          projectName:''//项目名称
        },
      }
    },

    methods: {
      //返回
      onClickLeft() {
        this.$router.go(-1)
      },
      submit(){
        let that =this;
        //手机号码正则匹配
        const phoneTest=new RegExp("^1[3|4|5|7|8][0-9]{9}$");
          if(this.formValidate.responsibilityName !==''&&this.formValidate.responsibilityPhoneNumber !==''&&this.formValidate.projectName !==''&&this.formValidate. college !==''){
             if(phoneTest.test(that.formValidate.responsibilityPhoneNumber)){
            let params=that.formValidate;
            this.$HTTP.post(this.$API.enterApplyFor,params,function(res){
              that.$router.push('/ApplySucceed')
            })
          }
          else{
               that.$Message.error('请填写正确的手机号码');
             }
        }
        else {
          that.$Message.error('请填写相关信息');
        }
      }
    },
      mounted(){
      // 动态获取年份
      let date = new Date();
      this.date = date.getFullYear()
    }
  }
</script>

<style scoped>

</style>


