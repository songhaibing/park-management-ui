<style scoped>
  @import "home.css";
</style>

<template>
  <div class="container">
    <!--入驻申请图片区域-->
    <van-row>
      <div class="demo-upload-list" @click="enter">
        <div class="enterPic">
          <img  src="../../../assets/join_145_110.png">
        </div>
        <div class="demo-upload-list-cover">
          <p>入驻申请</p>
        </div>
        <div class="demo-upload-list-child" >
          JOINTHECLUB
        </div>
      </div>
    </van-row>
    <!--申请进度图片区域-->
    <van-row>
      <div class="demo-upload-list" @click="inquire" style="background-color:rgb(241 241 241) ">
        <div class="applyPic">
          <img src="../../../assets/progress_145_110.png">
        </div>

        <div class="demo-upload">
          申请进度
        </div>
        <div class="demo-upload-list-cover-child" >
          APPLICATIONPROGRESS
        </div>
      </div>
    </van-row>
    <!--申请公示图片区域-->
    <van-row>
      <div class="demo-upload-list"  @click="clickPublicity" style="background-color:#DDF4FE">
        <img src="../../../assets/publicly_145_110.png">
        <div class="demo-upload-list-cover">
          申请公示
        </div>
        <div class="demo-upload-list-child" style="margin-top: 2%">
          PUBLICITY
        </div>
      </div>

    </van-row>
    <!--场地申请图片区域-->
    <van-row>
      <div class="demo-upload-list" style="background-color: #E1E8F9" @click="clickPlace" >
        <div style="margin-left: 200px">
          <img src="../../../assets/PublicFacilities_145_110.png">
        </div>
        <div class="demo-upload">
          场地申请
        </div>
        <div class="demo-upload-list-cover-child" >
          PUBLICFACILITIES
        </div>
      </div>
    </van-row>
    <div  class="home-footer" >
      <span class="footer-text" >蓝色技术工作室</span>© {{date}}
    </div>
  </div>


</template>

<script>
  export default {
    name: "home",
    components: {},
    props: [],
    data() {
      return {
        date:''
      };
    },

    methods: {
      // 点击图片进行跳转到入驻申请
      enter() {
        this.$router.push('/enterApply')
      },
      //点击图片进行跳转到申请进度查询
      inquire() {
        this.$router.push('/applySchedule')
      },
      clickPlace(){
        this.$router.push('/PlaceApply')
      },
      clickPublicity(){
        this.$router.push('/ApplyPublicity')
      }

    },
    mounted() {
       // 动态获取年份
      let date = new Date();
      this.date = date.getFullYear()
    }
  };
</script>



