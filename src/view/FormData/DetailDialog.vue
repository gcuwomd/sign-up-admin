<template>
  <n-modal v-model:show="dialogStatus">
    <n-card
      style="width: 600px"
      title="详细信息"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-grid cols="2" item-responsive responsive="screen">
        <n-gi span="1">
          <n-image
            width="200"
            height="300"
            object-fit="contain"
            :src="picture"
          />
        </n-gi>
        <n-gi span="1">
          <n-space vertical>
            <div v-for="(content, index) in props.rowData">
              {{ formatInfo(index, content) }}
            </div>
          </n-space>
        </n-gi>
      </n-grid>
    </n-card>
  </n-modal>
</template>
<script lang="ts" setup>
import {
  defineProps,
  defineExpose,
  Ref,
  ref,
  computed,
  watch,
  nextTick,
} from "vue";
import { options } from "./formData.config";
import { getPicture } from "./formData.api";
import { IFormData } from "./data.type";

const props = defineProps<{
  rowData: Array<string>;
}>();

let picture = ref("");

// 弹窗控制
let dialogStatus = ref(false);

// 获取同学的照片
// function getPictureById(id: number): string {

//   return "";
// }
watch(
  () => dialogStatus.value,
  (a) => {
    if (a) {
      nextTick(() => {
        getPicture(+props.rowData[0]).then((res) => {
          if (res.length != 0) {
            picture.value = res[0].picture;
          } else {
            picture.value =
              "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg";
          }
        });
      });
    }
  }
);

// 格式化详细信息
function formatInfo(index: number, content: string | number): string | null {
  if (index != 0 && index != 11) {
    return `${options[index - 1].label}: ${content}`;
  }
  return null;
}

// 暴露给父组件的属性方法
defineExpose({
  dialogStatus,
});
</script>
<style lang="scss" scoped></style>
