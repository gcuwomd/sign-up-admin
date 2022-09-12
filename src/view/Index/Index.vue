<template>
  <n-space vertical>
    <div class="container">
      <n-layout has-sider class="container-body" sider-placement="left">
        <n-space align="center">
          <n-layout-sider
            :collapsed-width="60"
            collapse-mode="width"
            bordered
            show-trigger="arrow-circle"
            :collapsed="collapsed"
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <n-menu
              :collapsed-width="60"
              :collapsed-icon-size="22"
              :options="menuOptions"
              default-value="data"
            />
          </n-layout-sider>
        </n-space>
        <n-layout class="content-page">
          <router-view></router-view>
        </n-layout>
      </n-layout>
    </div>
  </n-space>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
// 菜单配置
import menuOptions from "./menu.config";
let collapsed = ref(true);
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .content-page {
    height: 100vh;
    padding: 51px 20px;
    background-color: #f6f9f8;
  }
}
</style>
