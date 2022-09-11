<template>
  <n-space vertical>
    <div class="container">
      <n-layout has-sider class="container-body" sider-placement="left">
        <n-layout-sider
          :collapsed-width="60"
          collapse-mode="width"
          bordered
          style="padding-top: 24px"
          show-trigger="arrow-circle"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout class="content-page">
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </div>
  </n-space>
</template>
<script lang="ts" setup>
import { RouterView } from "vue-router";
// 菜单配置
import menuOptions from "./menu.config";
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .n-layout-sider {
    height: 100vh;
  }

  .content-page {
    height: 100vh;
    padding: 51px 20px;
    background-color: #f6f9f8;
  }
}
</style>
