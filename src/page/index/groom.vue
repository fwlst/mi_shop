<template>
  <scroll class="groom" ref="groomList" :pullup="true" @pullup="pullup">
    <ul class="groom_list">
      <good-card v-for="(item,index) in groomList"
                 :key="index"
                 :good="item"
                 redirect="/groom"
                 @onLoadImg="_initScroll"
                 @clickItem="jumpDetails(index)"
      ></good-card>
    </ul>
  </scroll>
</template>

<script>
  import axios from 'axios'
  import goodCard from '@/components/goodCard'
  import scroll from '@/components/scroll'
  //import BScroll from 'better-scroll'

  export default {
    name: '',
    data() {
      return {
        pageIndex: 1,
        pageSize: 5,
        isPullDown: false,
        groomList: []
      }
    },
    mounted() {
      // 代替ready
      this.getGroomList();
    },
    methods: {
      //初始化局部滚动组件
      _initScroll() {
          this.$refs.groomList.refresh();
      },
      //获取推荐列表
      getGroomList() {
        let params = {
          goodGroom: true,
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        };
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'double-bounce'
        });
        axios.post('/goods/goodsList', params).then((res) => {
          let data = res.data;
          if (data.code === 200) {
            if (data.data.goodList.length) {
              this.groomList = this.groomList.concat(data.data.goodList);
              this.pageIndex++;
              setTimeout(() => {
                this._initScroll();
              }, 20)
            } else {
              this.isPullDown = true;
            }
            this.$indicator.close();
          }
        })
      },

      //滚动到底部
      pullup(){
        if(this.isPullDown){
          this.$toast('我是有底线的人')
        }else {
          this.getGroomList();
        }
      },


      //跳转到商品详情
      jumpDetails(index) {
        console.log(index)
      }

    },
    components: {
      goodCard,
      scroll
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
  .groom {
    position: absolute;
    top: 1.45rem;
    bottom: 55px;
    overflow: hidden;
  }
</style>
