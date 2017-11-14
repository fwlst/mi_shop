<template>
  <li class="good_card">
    <div class="pic">
      <img v-lazy="'/static/img/' + good.goodImg"/>
      <div class="tag"><img :src="'/static/img/' + good.goodTagImg "/></div>
    </div>
    <div class="good_info">
      <div class="good_info_top">
        <div class="good_name">{{good.goodName}}</div>
        <div class="good_price">￥{{good.goodPrice}}</div>
      </div>
      <div class="good_info_bottom">
        <div class="good_dec">{{good.goodDec}}</div>
        <div class="add_cart">加入购物车</div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    props:{
      // 数值且有默认值
      good: {
        type: Object
      },
    },
    mounted() {
      // 代替ready
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .good_card{
    width: 100%;
    .pic{
      position: relative;
      img{
        display: block;
        width: 100%;
      }
      .tag{
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 15px;
        bottom: 15px;
      }
    }
    .good_info{
      padding: .3rem;
      .good_info_top{
        display: flex;
        font-size: .4rem;
        .good_name{
          flex: 1;
          color: #000;
        }
        .good_price{
          flex: 0 0 1rem;
          color: #ff6000;
        }
      }
      .good_info_bottom{
        display: flex;
        align-items: center;
        margin-top: .2rem;
        .good_dec{
          flex: 1;
          font-size: .23rem;
        }
        .add_cart{
          flex: 0 0 100px;
          text-align: center;
          font-size: .36rem;
          color: #fff;
          height: .65rem;
          line-height: .65rem;
          background-color: #f95b07;
          border-radius: .65rem;
        }
      }
    }

  }

</style>
