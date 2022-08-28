<template>
  <div class="container">
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button @click="handleClick">找点乐子吧</n-button>
      </template>
      即将重定向:{{ time }}
    </n-result>
  </div>
</template>

<script lang="ts" setup>
import { NotFoundTime } from "../const";
import { useMessage } from "naive-ui";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
let time = ref(NotFoundTime);
let router = useRouter();
const message = useMessage();
const timer = setInterval(() => {
  if (time.value == 0) {
    router.push({ name: "Login" });
    clearInterval(timer);
  } else {
    time.value--;
  }
}, 1000);
// 点击找乐子
function handleClick() {
  message.info("奖励奥利奥一个！！！");
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
