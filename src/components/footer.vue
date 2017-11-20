<template>
  <section class="footer" @click="goPage">
    <mt-tabbar v-model="selectedP">
      <mt-tab-item id="/groom">
        <span slot="icon" class="icon icon-home"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="/cart" class="cart_item">
        <span slot="icon" class="icon icon-cart"></span>
        购物车
        <mt-badge v-if="cartNub" class="cart_nub"  size="small" color="#FF5722">{{cartNub}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="/user">
        <span slot="icon" class="icon icon-user"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </section>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        selectedP: '',
      }
    },
    props: {
      selected: {
        type: String
      },
      cartNub: {
        type: Number
      }
    },
    mounted() {
      // 代替ready
      this.selectedP = this.selected;
    },
    methods: {
      goPage() {
        this.$router.push({
          path: this.selectedP
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    .icon {
      background: url("../assets/img/spr1_5b2e09c.png") no-repeat;
      background-size: 24px 192px;

      &.icon-home {
        background-position-y: -168px;
      }
      &.icon-cart {
        background-position-y: -72px;
      }
      &.icon-user {
        background-position-y: -120px;
      }

    }
    .cart_item{
      position: relative;
      .cart_nub{
        position: absolute;
        top:0;
        right: 30%;

      }
    }

    .mint-tabbar {
      background-color: #fff;
      .is-selected {
        background-color: #fff;
        color: #FF5722;
        background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        .icon-home {
          background-position-y: -144px;
        }
        .icon-cart {
          background-position-y: -48px;
        }
        .icon-user {
          background-position-y: -96px;
        }

      }
    }
  }
</style>
