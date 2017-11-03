<template>
    <section class="user">
      我的
      <router-link to="/addGood" tag="div"><mt-button size="large">添加商品</mt-button></router-link>
      <vue-footer selected="/user"></vue-footer>
    </section>
</template>

<script>
  import vueFooter from '@/components/footer.vue'
    export default {
        name: '',
        data() {
            return {
              selected: '/user',
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
