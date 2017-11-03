<template>
  <section class="add_good">
    <h2 class="title">添加商品</h2>
    <div class="good_form">
      <mt-field label="商品名称" placeholder="商品名称" v-model="good.goodName"></mt-field>
      <mt-field label="商品简介" placeholder="商品简介" v-model="good.goodDec"></mt-field>
      <mt-field label="商品价格" placeholder="商品价格" v-model="good.goodPrice"></mt-field>
      <mt-field label="商品库存" placeholder="商品库存" v-model="good.goodStock"></mt-field>
      <mt-field label="商品图片" placeholder="商品图片" v-model="good.goodImg"></mt-field>
      <a data-v-0b968d6d="" class="mint-cell mint-field">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title"><span class="mint-cell-text">促销标签</span></div>
          <div class="mint-cell-value" @click="tagPopup = true">
            <input class="mint-field-core" type="text" placeholder="选择促销标签" v-model="good.goodTag"/>
          </div>
        </div>
      </a>
      <mt-field label="标签图" placeholder="标签图" v-model="good.goodTagImg"></mt-field>
      <a data-v-0b968d6d="" class="mint-cell mint-field">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title"><span class="mint-cell-text">商品类型</span></div>
          <div class="mint-cell-value" @click="typePopup = true">
            <input class="mint-field-core" type="text" placeholder="商品类型" v-model="good.goodType"/>
          </div>
        </div>
      </a>

      <mt-field label="推荐" placeholder="推荐" v-model="good.goodGroom ? '推荐':'不推荐'">
        <mt-switch v-model="good.goodGroom"></mt-switch>
      </mt-field>
    </div>

    <div class="add_btn">
      <mt-button size="large" @click="addGood">添加商品</mt-button>
    </div>

    <mt-popup v-model="tagPopup" position="bottom" class="good_popup">
      <mt-picker :slots="tagSlots" @change="onTagValuesChange" :showToolbar=" showToolbar ">
        <div class="showToolbar">促销标签</div>
      </mt-picker>
    </mt-popup>
    <!--、-->
    <mt-popup v-model="typePopup" position="bottom" class="good_popup">
      <mt-picker :slots="typeSlots" @change="onTypeValuesChange" :showToolbar=" showToolbar ">
        <div class="showToolbar">商品类型</div>
      </mt-picker>
    </mt-popup>


  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: '',
    data() {
      return {
        tagPopup: false,
        typePopup: false,
        showToolbar: true,
        goods: [],
        good: {
          goodName: '',
          goodDec: '',
          goodPrice: '',
          goodStock: '',
          goodImg: '',
          goodTag: '',
          goodTagImg: '',
          goodType: '',
          goodGroom: false
        },
        tagSlots: [
          {
            values: ['赠送活塞耳机', '直降100元', '12期免息', '赠壳膜毛巾', '直降300', '赠体重秤'],
          }
        ],
        typeSlots: [
          {
            values: ['手机', '只能', '电脑', '电视'],
          }
        ]
      }
    },
    mounted() {
      // 代替ready
    },
    methods: {
      onTagValuesChange(picker, values) {
        if (values[0] == undefined) {
          values[0] = ''
        }
        this.good.goodTag = values[0];
      },

      onTypeValuesChange(picker, values) {
        if (values[0] == undefined) {
          values[0] = ''
        }
        this.good.goodType = values[0];
      },

      addGood() {
        axios.post('/goods/addGood', {good: this.good}).then((res) => {
          console.log(res);
        })
      },


    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>

  .add_good {
    padding-top: 50px;
    .title {
      margin-bottom: 15px;
      text-align: center;
      font-size: 20px;
      height: 40px;
      line-height: 40px;
    }
    .add_btn {
      margin-top: 25px;
      padding: 0 15px;
    }
    .good_popup {
      width: 100%;
      .showToolbar {
        text-align: center;
        font-size: 20px;
        line-height: 40px;
        color: #000;
        border-bottom: 1px solid #ddd;
      }
    }
    .good_form {
      .mint-cell-value {
        height: 48px;
      }
    }
  }
</style>
