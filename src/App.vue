<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <n-dialog-provider>
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-dialog-provider>

</template>

<style scoped>
</style>
