<style scoped>
  @import "ApplyPublicity.css";
</style>

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

