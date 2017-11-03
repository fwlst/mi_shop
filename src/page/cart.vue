<template>
  <section class="cart">
    购物车
    <vue-footer :selected="selected"></vue-footer>
  </section>
</template>

<script>
  import vueFooter from '@/components/footer.vue'

  export default {
    name: '',
    data() {
      return {
        selected: '/cart',
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

</style>
