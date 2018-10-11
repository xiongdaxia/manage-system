/*
 * @Author: kangtian@yzyw-inc.com 
 * @Date: 2018-09-11 10:23:29 
 * @Last Modified by: kangtian@yzyw-inc.com
 * @Last Modified time: 2018-09-11 11:21:25
 */
<template lang='pug'>
.h-p100.w-h100
  el-row
    el-col(:span="3")
      .h-60.w-60
        img.h-p100.w-p100(src="")
    el-col(:span="12")    
      span  d
    el-col(:span="3")
      span 熊抗天
    el-col(:span="3")  
      el-button(type="default" size="small") 账号设置
    el-col(:span="3")  
      el-button(type="default" size="small") 退出登录

    
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
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


