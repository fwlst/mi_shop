<template>
  <section class="groom">
    <ul class="groom_list">
      <good-card v-for="(item,index) in groomList"
                 :key="index"
                 :good="item"
      ></good-card>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'
  import goodCard from '@/components/goodCard'

  export default {
    name: '',
    data() {
      return {
        groomList: []
      }
    },
    mounted() {
      // 代替ready
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'double-bounce',
        color: '#f95b07'
      });
      this.getGroomList();
    },
    methods: {
      getGroomList() {
        axios.post('/goods/groom').then((res) => {
          let data = res.data;
          if (data.code === 200) {
            setTimeout(() => {
              this.groomList = data.data.goodList;
              this.$indicator.close();
            }, 2000)
          }
        })
      }
    },
    components: {
      goodCard
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .groom {

  }
</style>
