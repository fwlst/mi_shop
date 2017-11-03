<template>
  <section class="groom">
    <ul class="groom_list">
      <li class="groom_item">
        <div class="pic">
          <img src="/static/img/phone1.webp"/>
          <div class="tag"><img src="/static/img/tag1.png"/></div>
        </div>
        <div class="good_info">
          <div class="good_info_top">
            <div class="good_name">x小米6</div>
            <div class="good_price">￥1299</div>
          </div>
          <div class="good_info_bottom">
            <div class="good_dec">x小米6</div>
            <div class="add_cart">加入购物车</div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: '',
    data() {
      return {}
    },
    mounted() {
      // 代替ready
      this.getGroomList();
    },
    methods: {
      getGroomList(){
        axios.post('/goods/groom').then((res)=>{
          console.log(res)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>

</style>
