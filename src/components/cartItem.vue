<template>
  <li class="cart_item">
    <div class="icon"></div>
    <div class="thumbnail">
      <img src="https://i1.mifile.cn/a1/pms_1505401464.03824312!180x1800.jpg">
    </div>
    <div class="goodInfo">
      <h2 class="goodName">{{good.goodName}}</h2>
      <div class="goodPrice">价格: {{good.goodPrice}}</div>
      <div class="tool">
        <div class="inputNub">
          <div class="btn" :class="good.goodNum === 1 ? 'no' : ''" @clock="">-</div>
          <input class="input" v-model="good.goodNum"/>
          <div class="btn">+</div>
        </div>
        <div class="close"></div>
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
      }
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
.cart_item{
  display: flex;
  padding: .4rem 0;
  border-bottom: 1px solid #f6f6f6;
  .icon{
    flex: 0 0 .6rem;
    background: url(https://s1.mi.com/m/images/m/check_press.png) 50% 50% no-repeat;
    background-size: 0.4rem 0.4rem;
  }
  .thumbnail{
    flex: 0 0 1.8rem;
    img{
      width: 100%;
    }
  }
  .goodInfo{
    flex: 1;
    .goodName{
      font-size: .28rem;
      line-height: .32rem;
      color: #666;
    }
    .goodPrice{
      font-size: .24rem;
      color: #999;
    }
    .tool{
      display: flex;
      .inputNub{
        flex: 0 0 2.5rem;
        display: flex;
        width: 2.5rem;
        border: 1px solid #f6f6f6;
        text-align: center;
        .btn{
          width: .6rem;
          height: .6rem;
          line-height: .6rem;
          font-size: .5rem;
          background-color: #f4f4f4;
          &.no{
            background-color: #fafafa;
          }
        }
        .input{
          width: 1.3rem;
          text-align: center;
        }
      }
      .close{
        flex: 0 0 .6rem;
        height: .6rem;
      }
    }
  }
}
</style>























