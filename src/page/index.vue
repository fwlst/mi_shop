<template>
  <section class="index">
    <div class="top-header">
      <div class="index-header">
        <div class="logo"><img src="../assets/img/logo_121d4a6.png"></div>
        <div class="search_bar">
          首页
        </div>
        <div class="login">
          <router-link tag="div" class="text" to="/login">登录</router-link>
        </div>
      </div>
      <div class="sub-header">
        <div class="swipe-tabs slick-slider">
          <div aria-live="polite" class="slick-list">
            <div class="slick-track">
              <router-link tag="div" v-for="(item,index) in subHeader" :to="item.url" class="swipe-tab slick-slide" v-text="item.name" :key="index"></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-container">
      <router-view/>
    </div>

    <vue-footer :selected="selected"></vue-footer>


  </section>
</template>

<script>
  import vueFooter from '@/components/footer.vue'
  export default {
    name: '',
    data() {
      return {
        selected: '/groom',
        subIndex: 0,
        subHeader: [{
          url: '/groom',
          name: '推荐'
        }, {
          url: '/phone',
          name: '手机'
        }, {
          url: '/intelligence',
          name: '智能'
        }, {
          url: '/television',
          name: '电视'
        }, {
          url: '/computer',
          name: '电脑'
        }]
      }
    },
    mounted() {
      // 代替ready
    },
    methods: {},
    components: {
      vueFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .index {
    .top-header {
      position: fixed;
      top: 0;
      height: 1.45rem;
      z-index: 3;
      .index-header {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: box;
        display: -webkit-box;
        box-align: center;
        -webkit-box-align: center;
        box-pack: center;
        -webkit-box-pack: center;
        padding: .15rem 0;
        background-color: #fafafa;
        .logo {
          width: 1rem;
          padding: 0 .25rem;
          box-sizing: border-box;
          img {
            width: .5rem;
            height: auto;
          }
        }
        .search_bar {
          line-height: .53rem;
          width: 5.2rem;
          height: .53rem;
          font-size: .30rem;
          text-align: center;
        }
        .login {
          display: block;
          white-space: nowrap;
          box-sizing: border-box;
          text-align: center;
          .text {
            font-size: .28rem;
            text-align: center;
            color: #969696;
            margin: 0 .22rem;
            text-decoration: none;
            outline: 0;
          }
        }

      }
      .sub-header {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        background-color: #fafafa;
        height: .7rem;
        overflow-y: hidden;
        width: 100%;
        .slick-slider {
          position: relative;
          display: block;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -ms-touch-action: pan-y;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
          position: relative;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);

            position: relative;
            display: block;
            overflow: hidden;
            height: 100%;
            margin: 0;
            padding: 0;

            .slick-track {
              -webkit-transform: translate3d(0, 0, 0);
              -moz-transform: translate3d(0, 0, 0);
              -ms-transform: translate3d(0, 0, 0);
              -o-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);

              position: relative;
              top: 0;
              left: 0;
              height: 100%;
              overflow-x: scroll;
              white-space: nowrap;
              display: block;

              .slick-slide {
                height: 100%;
                min-height: 1px;
                overflow: auto;
              }

              .swipe-tab {
                margin: 0 .28rem;
                height: .56rem;
                line-height: .56rem;
                font-size: .26rem;
                display: inline-block;
                align-items: center;
                justify-content: center;
                background: 0 0;
                border: 0;
                color: #747474;
                cursor: pointer;
                text-align: center;
                border-bottom: 2px solid rgba(237, 91, 0, 0);
              }

              .router-link-active {
                border-bottom-color: #ed5b00;
                color: #ed5b00;
              }

            }
          }
        }
      }
    }
    .main-container {
      padding-top: 1.45rem;
      font-size: 16px;
      padding-bottom: 55px;
    }



  }

</style>
