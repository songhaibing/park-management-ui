
<style scoped>
  @import "news.css";
</style>

<template>
  <div style="overflow: hidden;">
    <!--轮播图-->
    <van-row>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <div class="demo-upload-list">
            <img :src="image"/>
              <div class="demo-upload-list-cover">
                <p>「创青春」强势来袭，兴奋的你是否还没准备好，莫慌，有我</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <!--单独新闻信息-->
    <van-row>
      <div class="demo-upload-list">
        <img src="../../../assets/4.jpg">
        <div class="demo-upload-list-cover">
          「创青春」强势来袭，兴奋的你是否还没准备好，莫慌，有我
        </div>
      </div>
    </van-row>
    <!--单独新闻信息-->
    <van-row>
      <div class="demo-upload-list">
        <img src="../../../assets/6.jpg">
        <div class="demo-upload-list-cover">
          「创青春」强势来袭，兴奋的你是否还没准备好，莫慌，有我
        </div>
      </div>
    </van-row>
  </div>
</template>

<script>
  import logo from '../../../assets/text.jpg';
  import pic2 from '../../../assets/2.jpg'
  import pic3 from '../../../assets/3.jpg'
  import pic4 from '../../../assets/4.jpg'
  import pic6 from '../../../assets/6.jpg'

  export default {
    name: 'news',
    components: {},
    props: [],
    data() {
      return {
        images: [
          logo,
          pic2,
          pic3,
          pic4,
          pic6
        ]
      }
    },

    methods: {
      init(){
        let that = this
        that.$HTTP.get(that.$API.SeeTheNews,{},function (res) {

        })
      }
    },
    mounted() {
        this.init()
    }
  }
</script>


