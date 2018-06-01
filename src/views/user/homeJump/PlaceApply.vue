<template>
  <div class="container">
    <div class="title">
      <van-nav-bar
        title="公共设施申请"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="connection">
      联系方式
    </div>
    <van-field
      v-model="from.contactWay"
      label="手机号"
      placeholder="请输入手机号"
      required
    />
    <div class="connection" style="margin-left: 10px;color: rgb(153 153 153);">
      申请地点
    </div>
    <van-field
      v-model="from.requestAddress"
      label="地点"
      placeholder="请选择地点"
      required
      @focus="selectAddress"
      readOnly="readOnly"
    />
    <van-field
      v-model="from.requestUseTime"
      label="申请时间"
      placeholder="请填写开始和结束时间"
      required
    />
    <van-field
      v-model="from.personNumber"
      label="参会人数"
      placeholder="请输入参会人数"
      required
    />
    <!--查询按钮-->
    <div class="inquire-button" @click="apply">
      <Button class="search" type="primary" shape="circle" long>立即申请</Button>
    </div>
    <div class="text">
      提交成功后，我们会尽快与您取得联系
    </div>
    <!--页脚-->
    <div class="footer">
      <a>蓝色技术工作室</a>© {{date}}
    </div>
    <van-actionsheet v-model="show" :actions="actions"/>
  </div>
</template>

<script>
  export default {
    name: "place-apply",
    data() {
      return {
        show: false,
        actions: [
          {
            name: '会议室',
            callback: this.onClick
          },
          {
            name: '培训教室',
            callback: this.onClick
          },
          {
            name: '路演中心',
            callback: this.onClick
          }
        ],
        date: '',
        from: {
          contactWay: '',
          requestAddress:'',
          requestUseTime: '',
          personNumber: '',
          token: sessionStorage.token
        },

      }
    },
    methods: {
      onClick(msg) {
        this.show = false;
        this.from.requestAddress = msg.name;
      },
      selectAddress() {
        this.show = true;
      },
      onClickLeft() {
        this.$router.go(-1)
      },
      apply() {
        let that = this;
        //手机号码正则匹配
        const phoneTest = new RegExp("^1[3|4|5|7|8][0-9]{9}$");
        if (that.from.contactWay !== '' && this.from.requestAddress !== '' && this.from.requestUseTime !== '' && this.from.personNumber !== '') {
          if (phoneTest.test(that.from.contactWay)) {
            let params = that.from;
            this.$HTTP.post(this.$API.applicationPublicFacility, params, function (res) {
              that.$router.push('/ApplySucceed')
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
    }
  }
</script>

<style scoped>

</style>
