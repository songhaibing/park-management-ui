<template>
  <div style="height: 100%;">
    <!--标题title-->
    <div class="title">
      <van-nav-bar  :title="title"/>
    </div>

    <!--将子路由进行渲染到页面-->
    <router-view style="margin-bottom: 50px;"></router-view>
    <!--底部图标-->
      <van-tabbar v-model="active" @change="tabChange">
        <van-tabbar-item icon="home"></van-tabbar-item>
        <van-tabbar-item icon="browsing-history"></van-tabbar-item>
        <van-tabbar-item icon="contact"></van-tabbar-item>
      </van-tabbar>


  </div>
</template>

<script>
  export default {
    name: 'user-home',
    components: {},
    props: [],
    data() {
      return {
        title: this.$route.meta.title,
        active: this.$route.meta.active,
      }
    },
    methods: {
      //点击下面图标进行跳转不同路由
      tabChange(active) {
        switch (active) {
          case 0:
            this.$router.push('/');
            break;
          case 1:
            this.$router.push('/news');
            break;
          case 2:
            this.$router.push('/user');
            break;
        }
      }
    },
    mounted() {
    },
    //监听路由变化，修改title
    beforeRouteUpdate (to, from, next) {
      this.title = to.meta.title
      next()
    }
  }
</script>

<style scoped>

</style>
