<template>
  <div class="add_cart" @click.stop.prevent="addCart">加入购物车</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: '',
    data() {
      return {
      }
    },
    props:{
      // 数值且有默认值
      goodId: {
        type: String
      },
      redirect: {
        type: String
      }
    },
    mounted() {
      // 代替ready
    },
    methods: {
      addCart(){
        let param = {
          goodId: this.goodId
        };
        axios.post('/goods/addCart',param).then((res)=>{
          if(res.data.code === 200){
            this.$toast(res.data.data);
          } else if (res.data.code === 604) {
            this.$messagebox({
              title: '提示',
              message: '您没有登录，立即去登陆',
              showCancelButton: true
            }).then((action) => {
              if (action === 'confirm') {
                this.$router.push({
                  path: '/login',
                  query: {redirect: this.redirect}
                })
              }
            })
          }else {
            this.$toast(res.data.msg);
          }
        })
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>

</style>
