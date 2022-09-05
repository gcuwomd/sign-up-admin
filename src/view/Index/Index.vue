<template>
  <n-space vertical>
    <div class="container">
      <n-layout>
        <n-layout-header bordered>
          <n-h2>
            <n-text>Hi~网信委·网站运维部</n-text>
          </n-h2>
        </n-layout-header>
      </n-layout>
      <n-layout has-sider class="container-body" sider-placement="left">
        <n-layout-sider :collapsed-width="60" collapse-mode="width" bordered style=" padding-top:24px"  show-trigger="arrow-circle">
          <n-menu  :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout class="content-page">
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </div>
  </n-space>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
// 菜单配置
import menuOptions from "./menu.config"
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .n-layout-header {
    height: 57px;
  }
  
  .n-layout-sider {
    height: calc(100vh - 57px);
  }

  .content-page{
    padding:23px 40px 0 20px;
  background-color:#f6f9f8;
  }
}
</style>
