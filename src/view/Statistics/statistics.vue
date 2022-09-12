<template>
  <n-drawer v-model:show="active" width="25vw" :placement="placement">
    <n-drawer-content title="统计">
      <n-space justify="center">
        <n-card size="small">
          <n-text>报名总数</n-text>
          <n-space justify="center">
            <n-statistic tabular-nums>
              <n-number-animation
                ref="numberAnimationInstRef"
                :from="0"
                :to="statisticsData.headcount"
              />
              <template #suffix> 个人报名 </template>
            </n-statistic>
          </n-space>
        </n-card>
        <n-card title="男女比例" size="small">
          <n-space justify="center" align="center">
            <n-icon size="40" color="#3c80f2">
              <people></people>
            </n-icon>
            <n-text>{{ statisticsData.man }}</n-text>
            <n-text strong style="font-size: 20px">/</n-text>
            <n-icon size="40" color="#dc2556">
              <people></people>
            </n-icon>
            <n-text>{{ statisticsData.woman }}</n-text>
          </n-space>
        </n-card>
      </n-space>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { ref, Ref, onMounted, defineExpose, defineProps } from "vue";
import { IStatisticData } from "./../FormData/data.type";
import { BodySharp as people } from "@vicons/ionicons5";
import type { DrawerPlacement } from "naive-ui";
const placement = ref<DrawerPlacement>("right");
let active = ref(false);
const props = defineProps<{
  statisticsData: IStatisticData;
}>();
defineExpose({
  active,
});
</script>
<style lang="scss" scoped>
.n-card {
  width: 20vw;
  box-shadow: 1.3px 0.3px 7px -100px rgba(0, 0, 0, 0.004),
    4.5px 1.1px 23.5px -100px rgba(0, 0, 0, 0.006),
    20px 5px 105px -100px rgba(0, 0, 0, 0.01);
  border-radius: 13px;
}
</style>
