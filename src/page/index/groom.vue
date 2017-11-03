<template>
  <section class="groom">
    推荐
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
