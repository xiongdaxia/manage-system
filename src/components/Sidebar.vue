/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-09-11 10:24:50 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-10-21 15:29:00
 */
<template lang='pug'>
.w-146.sidebar_container
  el-menu(
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="fnClickOpen"
    @close="fnClickClose"
  )
    el-submenu(index="1")
      template(slot="title")
        i.el-icon-view
        span(slot="title")  导航一
      el-menu-item-group
        el-menu-item(index="1-1") 选项一
        el-menu-item(index="1-2") 选项二
        el-menu-item(index="1-3") 选项三  
    el-submenu(index="2")
      template(slot="title")
        i.el-icon-view
        span(slot="title")  导航二
      el-menu-item-group
        el-menu-item(index="2-1") 选项一
        el-menu-item(index="2-2") 选项二
        el-menu-item(index="2-3") 选项三  
    el-submenu(index="3")
      template(slot="title")
        i.el-icon-view
        span(slot="title")  导航三
      el-menu-item-group
        el-menu-item(index="3-1") 选项一
        el-menu-item(index="3-2") 选项二
        el-menu-item(index="3-3") 选项三  
    el-submenu(index="4")
      template(slot="title")
        i.el-icon-view
        span(slot="title")  导航四
      el-menu-item-group
        el-menu-item(index="4-1") 选项一
        el-menu-item(index="4-2") 选项二
        el-menu-item(index="4-3") 选项三  
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    // ======================事件处理函数======================
    fnClickOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    },
    fnClickClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
    // ======================业务逻辑函数======================
    // ========================纯函数=========================
    // ======================网络请求函数======================
    // =======================初始化函数=======================
  }
});
</script>

<style lang='scss'>
.sidebar_container {
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
