<template>
  <section class="groom" ref="groomList">
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
  import BScroll from 'better-scroll'

  export default {
    name: '',
    data() {
      return {
        pageIndex: 1,
        pageSize: 5,
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
        let params = {
          goodGroom: true,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        };
        axios.post('/goods/goodsList', params).then((res) => {
          let data = res.data;
          if (data.code === 200) {
            setTimeout(() => {
              if (data.data.goodList.length) {
                this.groomList = data.data.goodList;
                this.$nextTick(() => {
                  if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.groomList, {
                      scrollEnd(e){
                        console.log(e);
                      }
                    });
                  } else {
                    this.scroll.refresh();
                  }
                })
              } else {
                this.$toast('没有相关推荐')
              }
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
