/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-10-27 13:55:57 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-27 14:08:30
 */
<template lang='pug'>
AnimationCard(:url='url', 
    :delay= 'delay', 
    :titile= 'titile'
    :des='des', 
    :destination='destination')
</template>

<script lang='ts'>
import Vue from 'vue';
import AnimationCard from '@/components/common/animation-card.vue';

export default Vue.extend({
  data() {
    return {
      url: require('../../assets/tech.jpg'),
      delay: 2,
      titile: '自我认知',
      des: '你以为你真的懂你自己吗？',
      destination: 'www.baidu.com'
    };
  },
  components: {
    AnimationCard
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
</style>
