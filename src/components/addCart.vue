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
            this.$router.push({
              path: '/groom'
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
