<style scoped>
  @import "ApplyInquire.css";
</style>

<template>
  <div class="container">
    <div class="title">
      <van-nav-bar
        title="申请进度查询"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <Card style="margin-top: 10px">
      <div class="author-date">
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
        <div class="author-text">
          <p class="author">{{responsibilityName}}</p>
          <span class="const-text">{{status}}</span>
          <p class='tool'>{{responsibilityPhoneNumber}}</p>

        </div>
      </div>
    </Card>
    <Card style="margin-top: 10px">
      <van-steps direction="vertical" :active='active' active-color="#f60">
        <van-step>
          <div style="display: flex">

            <div style="margin-left: 30px;">
              <h3>申请提交</h3>
              <p>入驻申请成功后，我们会尽快与您取得联系。</p>
            </div>
          </div>
        </van-step>

        <van-step>
          <div style="display: flex">
            <div style="margin-left: 30px;">
              <h3>申请通过</h3>
              <p>我们将尽快处理该您的信息，期待您的入驻！</p>
            </div>
          </div>
        </van-step>
        <van-step>
          <div style="display: flex">
            <div style="margin-left: 30px;">
              <h3>申请未通过</h3>
              <p>请保持电话畅通，我们将通过电话，邀请您交流。</p>
            </div>
          </div>
        </van-step>
      </van-steps>
    </Card>
    <div class="footer">
      <a>蓝色技术工作室</a>© {{date}}
    </div>
  </div>

</template>

<script>
  import statusCode from '../../../lib/status.js'
  export default {
    name: "apply-inquire",
    components:{
      statusCode
    },
    data() {
      return {
        date: '',
        resource: '',
        responsibilityName: sessionStorage.responsibilityName,
        responsibilityPhoneNumber: sessionStorage.responsibilityPhoneNumber,
        status:statusCode[sessionStorage.status],
        month:'',
        day:'',
        hours:'',
        active:parseInt(sessionStorage.status)
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },


    },
    mounted() {
      //动态获取年份
      let date = new Date();
      this.date = date.getFullYear();
    },

  }
</script>


