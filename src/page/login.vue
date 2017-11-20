<template>
  <section class="login">
    <div class="warp">
      <div class="layout_panel">
        <div class="layout">
          <div class="header_tit">
            <em id="custom_display_1" class="mi_logo">
              <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect width="50" height="50" style="fill:#ef5b00"></rect>
                <rect x="11.25" y="15" width="5" height="20" style="fill:#FFFFFF"></rect>
                <rect x="11.25" y="15" width="12.5" height="5" style="fill:#FFFFFF"></rect>
                <rect x="26.25" y="22.5" width="5" height="12.5" style="fill:#FFFFFF"></rect>
                <rect x="33.75" y="15" width="5" height="20" style="fill:#FFFFFF"></rect>
                <circle cx="23.75" cy="22.5" r="7.5" fill="#FFFFFF"></circle>
                <rect x="16.25" y="20" width="7.5" height="15" style="fill:#ef5b00"></rect>
                <rect x="16.25" y="22.5" width="10" height="12.5" style="fill:#ef5b00"></rect>
                <circle cx="23.75" cy="22.5" r="2.5" fill="#ef5b00"></circle>
                <rect x="18.75" y="22.5" width="5" height="12.5" style="fill:#FFFFFF"></rect>
              </svg>
            </em>
            <div class="header_tit_txt">小米账号登录</div>
          </div>
          <div class="login_form">
            <mt-field label="用户名" placeholder="手机号码" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="密码" type="password" v-model="password"></mt-field>
          </div>
          <div class="tip_msg">{{errMsg}}</div>
          <div class="btn_g">
            <div class="btn login" @click="login">登录</div>
            <router-link tag="div" to="/register" class="btn register">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <p class="nf-intro">小米公司版权所有-京ICP备10046444-<img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png">京公网安备11010802020134号-京ICP证110507号</p>

  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: '',
    data() {
      return {
        username: '',
        password: '',
        errMsg:''
      }
    },
    mounted() {
      // 代替ready
    },
    methods: {
      login(){
        let param = {
          username: this.username,
          password: this.password
        };
        console.log(this.$route.query)
        axios.post('/users/login',param).then((res)=>{
          if(res.data.code === 200){
            sessionStorage.setItem('userName' , res.data.data.session);
            this.$router.push({
              path: this.$route.query.redirect
            })
          }else {
            this.$toast(res.data.msg);
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .login {
    .warp {
      padding-bottom: .9rem;
      .layout_panel {
        .layout {
          width: 100%;
          margin: 0 auto 30px;
          padding: 0 20px;
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .header_tit {
            padding: 40px 0 20px;
            .mi_logo {
              display: block;
              text-align: center;
              svg {
                width: 50px;
                height: 50px;
              }

            }
            .header_tit_txt {
              margin-top: 22px;
              font-size: .5rem;
              color: #424242;
              font-weight: normal;
              text-align: center;
            }
          }
          .tip_msg{
            height: 40px;
            line-height: 40px;
            color: #f56700;
            padding-left: 15px;
            font-size: 14px;
          }
          .btn_g{
            .btn{
              width: 100%;
              font-size: 18px;
              text-align: center;
              height: 46px;
              line-height: 46px;
              border-radius: 46px;
              margin-bottom: 14px;
            }
            .login{
              background-color: #33b4ff;
              color: #fff;
            }
            .register{
              border: 1px solid #ddd;
            }
          }
        }
      }
    }
    .nf-intro {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 15px;
      padding: 10px;
      text-align: center;
      font-size: 14px;
    }

  }
</style>
