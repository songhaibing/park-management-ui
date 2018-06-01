

<template>
  <div class="container">
    <div class="title">
      <van-nav-bar
        title="申请公示"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <card class="card" v-for="item in publicityRes" :key="item.id">
      <div class="author-date" >
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <div class="author-text" >
          <p class="author" >{{item.projectName}}</p>
          <span class="const-text" >申请通过</span>
          <p class='tool' >{{item.responsibilityName}}</p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
  export default {
    name: "apply-publicity",
    data(){
      return{
        publicityRes:''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
     init:function () {
        let that =this;
       this.$HTTP.get(this.$API.applicationPublic,{},function(res){
              that.publicityRes =res;
       })
     }
    },
    mounted(){
      this.init()
    }
  }
</script>

<style scoped>
  .container{
    background-color: rgb(248, 247, 247);
    height: 100%;
    display: flex;
    flex-direction: column
  }
  .card{
    margin-top: 10px;
  }
  .author-date{
    flex-direction: row;
    margin-top: 30px
  }
  .author-text{
    vertical-align: middle;
    margin-left: 50px;
    margin-top: -40px
  }
  .author{
    font-family: PingFangSC-Medium;
    font-size: 18pt;
    color: rgb(39 38 54)
  }
  .const-text{
    float: right;
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    color: rgb(205 196 196);
    margin-top: -30px
  }
  .tool{
    font-family: PingFangSC-Regular;
    font-size: 12pt;
    color: rgb(205 196 196)
  }

</style>

