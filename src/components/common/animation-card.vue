/*
 * 带动画的卡片
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-10-27 13:25:13 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-27 13:45:30
 */
<template lang='pug'>
.animation-card-container
    a(href="destination")
      .h-380.w-380
        img.w-p100.h-p100.pst-rlt.card-animation-item( :src="url")
      .card-transition-content.pst-absl.t-380.h-380.w-380
        .h3 {{ titile  }} 
        p {{ des }}
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  props: {
    url: String, //  图片的地址
    delay: Number, // 延迟时间
    titile: String, // 文章title
    des: String, // 文章描述
    destination: String //卡片跳转的链接
  },
  methods: {
    // ======================事件处理函数======================
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
});
</script>

<style lang='scss' scoped>
.animation-card-container {
  .card-animation-item {
    animation: bigger 1s;
  }
  .card-transition-content {
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 1s 1s ease;
  }
  a:hover {
    img {
      opacity: 1;
    }
    .card-transition-content {
      transform: translateY(-380px);
      opacity: 1;
      background: rgba(255, 255, 255, 1);
    }
  }
  @keyframes bigger {
    0% {
      height: 10%;
      width: 10%;
    }
    100% {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
