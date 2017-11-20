<template>
  <section class="cart">
    <div class="noitems" v-if="!cartNub">
      <span class="">购物车还是空的</span>
      <router-link tag="span" to="/"> <mt-button size="small">去逛逛</mt-button></router-link>
    </div>


    <ul class="cart_list" v-if="cartNub">
      <li class="list_item">

      </li>
    </ul>

    <vue-footer :selected="selected" :cartNub="cartNub"></vue-footer>
  </section>
</template>

<script>
  import axios from 'axios'
  import vueFooter from '@/components/footer'

  export default {
    name: '',
    data() {
      return {
        selected: '/cart',
        cartInfo: {},
        cartNub: 0
      }
    },
    mounted() {
      // 代替ready
      this.getCartInfo();
    },
    methods: {
      //获取购物车详情
      getCartInfo() {
        axios.post('/users/cartInfo').then((res) => {
          if (res.data.code === 200) {
            this.cartNub = res.data.data.cartNub;
            this.cartInfo = res.data.data.cartInfo;

          } else if (res.data.code === 604) {
            this.$messagebox({
              title: '提示',
              message: '您没有登录，立即去登陆',
              showCancelButton: true
            }).then((action) => {
              if (action === 'confirm') {
                this.$router.push({
                  path: '/login',
                  query: {redirect: '/cart'}
                })
              } else {
                this.$router.go(-1);
              }
            })
          } else {
            this.$toast(res.data.msg);
          }
        })
      }

    },
    components: {
      vueFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
.cart{
  .noitems{
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: #ebebeb;
  }
}
</style>
