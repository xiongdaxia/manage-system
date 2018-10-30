/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-10-22 22:23:28 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-22 23:29:15
 */
<template lang='pug'>
.mt-60
  .h-380.w-380.pst-rlt.dspl-inbl.mr-20.mtb-20(v-for="item in aContentList")
    a(href="#")
      .h-380.w-380
        img.w-p100.h-p100.pst-rlt.img-item( :src="item.url")
      .content.pst-absl.t-380.h-380.w-380
        .h3 介绍一下    

</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      aContentList: [
        { url: require('../../assets/tech.jpg') },
        { url: require('../../assets/tech.jpg') },
        { url: require('../../assets/tech.jpg') },
        { url: require('../../assets/tech.jpg') },
        { url: require('../../assets/tech.jpg') },
        { url: require('../../assets/tech.jpg') }
      ]
    };
  },
  methods: {
    // ======================事件处理函数======================
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  },
  mounted() {}
});
</script>

<style lang='scss' scoped>
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.img-item {
  animation: 0.5s bigger;
}
.content {
  // backface-visibility: hidden;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

a:hover {
  img {
    opacity: 1;
  }
  .content {
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
</style>
