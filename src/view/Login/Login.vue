<template>
  <div class="container">
    <n-grid cols="7 m:11" item-responsive responsive="screen">
      <n-gi span="1 m:4"></n-gi>
      <n-gi span="5 m:3">
        <n-card>
          <n-space vertical>
            <n-h1>
              <n-text type="primary">Admin Login</n-text>
            </n-h1>
            <n-form
              ref="formRef"
              :label-width="80"
              :rules="rules"
              :model="formValue"
              size="medium"
            >
              <n-form-item label="账号" path="account">
                <n-input
                  v-model:value="formValue.account"
                  placeholder="输入您的账号"
                />
              </n-form-item>
              <n-form-item label="密码" path="password">
                <n-input
                  type="password"
                  show-password-on="click"
                  v-model:value="formValue.password"
                  placeholder="请入您的密码"
                >
                  <template #password-visible-icon>
                    <n-icon :size="16" :component="GlassesOutline" />
                  </template>
                  <template #password-invisible-icon>
                    <n-icon :size="16" :component="Glasses" />
                  </template>
                </n-input>
              </n-form-item>

              <n-form-item>
                <n-button
                  attr-type="button"
                  type="success"
                  @click="handleClickLogin"
                  >登录
                </n-button>
              </n-form-item>
            </n-form>
          </n-space>
        </n-card>
      </n-gi>
      <n-gi span="1 m:4"></n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { FormInst, useMessage } from "naive-ui";
import { ILoginForm } from "./login.model";
import { login } from "./login.api";
import { GlassesOutline, Glasses } from "@vicons/ionicons5";

const router = useRouter();
const message = useMessage();
const formRef = ref<FormInst | null>(null);

let formValue: Ref<ILoginForm> = ref({
  account: "",
  password: "",
});

const rules = {
  account: {
    required: true,
    message: "账号不能为空",
    trigger: "blur",
  },
  password: {
    required: true,
    message: "密码不能为空",
    trigger: "blur",
  },
};

// 点击登录
function handleClickLogin(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      login(formValue.value)
        .then((res) => {
          message.success("登录成功！");
          router.push({ name: "FormData" });
        })
        .catch((err) => {
          message.error("登录验证失败！");
        });
    } else {
      message.warning("用户名和密码不能为空！");
    }
  });
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .n-h1 {
    text-align: center;
  }
  .n-button {
    width: 100%;
  }
}
</style>
