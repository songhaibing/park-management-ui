

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

<style scoped>
  .enterPic{
    width: 100%;
    height: 100%;
    background-color: rgb(230, 241, 255)
  }
  .applyPic{
    width: 100%;
    height: 100%;
    margin-left: 200px;
  }
  .demo-upload-list {
    position: relative;
    overflow: hidden;
    background-color: rgb(241, 241 ,241);
    margin: 5px;
    background-color: rgb(250 242 235)
  }

  .demo-upload-list-cover {
    position: absolute;
    right: 25pt;
    top: 32pt;
    font-family: PingFangSC-Regular;
    font-size: 16pt;
    line-height: 24pt;
    color: black;
    background: linear-gradient(top, rgba(27 27 27, 0.78), rgba(255 255 255, 0.0));
  }

  .demo-upload {
    position: absolute;
    left: 25pt;
    top: 32pt;
    font-family: PingFangSC-Regular;
    font-size: 16pt;
    line-height: 24pt;
    color: black;
    background: linear-gradient(top, rgba(27 27 27, 0.78), rgba(255 255 255, 0.0));
  }

  .demo-upload-list-child {
    position: absolute;
    right: 25pt;
    top: 50pt;
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    line-height: 12pt;
    margin-top: 2%
  }
  .demo-upload-list-cover-child {
    position: absolute;
    left: 25pt;
    top: 50pt;
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    line-height: 12pt;
    margin-top: 2%
  }
  .home-footer{
    text-align: center;
    margin-top: 100px
  }
  .footer-text{
    font-size: 12px;
    color: rgb(75 165 245)
  }

</style>



