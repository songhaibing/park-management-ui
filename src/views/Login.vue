<style scoped>
  @import "Login.css";
</style>

<template>
  <div>
    <div :class="util.isPC() ? 'pcLogin' : ''" @keydown.enter="handleSubmit">
      <row type="flex" justify="center" align="middle">
        <i-col :class="util.isPC() ? 'pcLoginMargin' : 'phoneLoginMargin'" span="24" :xs="24" :sm="10" :md="8" :lg="6">
          <card :bordered="false" :dis-hover="true">
            <p slot="title" style="text-align: center">
              <icon type="log-in"></icon>
              红绿蓝众创空间
            </p>
            <div class="form-con">
              <!--表单-->
              <i-form ref="loginForm" :model="form" :rules="rules">
                <form-item prop="phoneNumber">
                  <i-input v-model="form.phoneNumber" placeholder="请输入手机号">
                    <span slot="prepend">
                      <icon :size="16" type="person"></icon>
                    </span>
                  </i-input>
                </form-item>
                <form-item prop="password">
                  <i-input type="password" v-model="form.password" placeholder="请输入密码">
                    <span slot="prepend">
                      <icon :size="14" type="locked"></icon>
                    </span>
                  </i-input>
                </form-item>
                <form-item>
                  <Checkbox v-model="single">记住密码</Checkbox>
                </form-item>
                <form-item>
                  <i-button @click="handleSubmit" type="primary" long>登录</i-button>
                </form-item>
              </i-form>
            </div>
          </card>
        </i-col>
      </row>
    </div>
  </div>
</template>

<script>
  import util from "../lib/util";

  export default {
    name: 'login',
    components: {},
    props: [],
    data() {
      return {
        single: false,
        util: util,
        form: {
          phoneNumber: this.$Cookies.get('phoneNumber'),
          password: this.$Cookies.get('password')
        },
        rules: {
          phoneNumber: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      //登陆
      handleSubmit() {
        this.$refs.loginForm.validate((valid) => {
          //如果记住密码
          if (valid) {
            if (this.single === true) {
              this.$Cookies.set('phoneNumber', this.form.phoneNumber);
              this.$Cookies.set('password', this.form.password, {expires: 7});
            } else {
              this.$Cookies.remove('password')
            }
            let that = this;
            let params = that.form
            that.$HTTP.post(this.$API.login, params, function (res) {
              if(res.user.status === 0){
                sessionStorage.phoneNumber = res.user.phoneNumber
                sessionStorage.token = res.token
                that.$router.push('/')
              }else {
                that.$Message.error('用户名或者密码错误');
              }

            })
            //判断不同角色跳转的路由
            // if(that.$Cookies.set('role',that.$ROLE_MAP['1'],{expires: 7})){
            //   that.$router.push('/a-home')
            // }else{
            //   that.$router.push('/u-home')
            // }
          }
        });
      }
    },
    mounted() {

    }
  }
</script>


