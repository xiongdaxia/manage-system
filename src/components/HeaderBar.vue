/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-09-11 10:23:29 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-27 13:55:14
 */
<template lang='pug'>
.h-p100.w-h100
  p.fw-500.fs-16 熊抗天的小天地
  p 一个以前端技术为主，以对生活认知为辅的休闲地
  .vh-parent
    el-tabs.w-700.h(v-model="sActiveName" @tab-click="fnClickActive" stretch)
      el-tab-pane(label="技术" name="tech")
      el-tab-pane(label="认知" name="cognition")
      el-tab-pane(label="人文" name="humanity")
      el-tab-pane(label="社交" name="social")
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      sActiveName: 'tech'
    };
  },
  methods: {
    // ======================事件处理函数======================
    fnClickActive() {
      this.$router.push(`/${this.sActiveName}`);
    }
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
});
</script>
<style lang='scss' scoped>
</style>


