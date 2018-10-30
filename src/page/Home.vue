/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-09-10 20:04:54 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-21 15:43:36
 */
<template lang='pug'>
div
  el-container
    el-header
      HeaderBar
    el-main
      router-view
    el-footer
</template>

<script lang='ts'>
import Vue from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    HeaderBar
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
