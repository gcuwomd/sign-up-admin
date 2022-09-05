<template>
  <n-grid cols="6" item-responsive responsive="screen" :x-gap="15">
    <n-gi span="4">
      <n-card class="statistics-chart">
        <n-h1>
          <n-text>统计图表</n-text>
        </n-h1>
        <n-grid cols="2" item-responsive responsive="screen" :x-gap="100">
          <n-gi span="1">
            <n-space vertical>
              <n-h4>
                <n-text>男女比例</n-text>
              </n-h4>
              <div class="sex-container">
              <canvas ref="sexChart"></canvas>
            </div>
            </n-space>
          </n-gi>
          <n-gi span="1">
            <n-h4>
                <n-text>各学院占比</n-text>
              </n-h4>
              <div class="college-container">
                <canvas ref="collegeChart"></canvas>
              </div>
          </n-gi>
        </n-grid>
      </n-card>
    </n-gi>
    <n-gi span="2">
      <n-card class="statistics-data"></n-card>
    </n-gi>
  </n-grid>
  <n-grid class="statistics-sum" cols="32" item-responsive responsive="screen" :x-gap="20">
    <n-gi span="8">
      <n-card>
        <n-space align="center" vertical justify="center">
          <n-statistic label="总共报名了:" tabular-nums>
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
            <template #suffix> 个同学！！！ </template>
          </n-statistic>
        </n-space>
      </n-card>
    </n-gi>
    <n-gi span="8">
      <n-card></n-card>
    </n-gi>
    <n-gi span="8">
      <n-card></n-card>
    </n-gi>
    <n-gi span="8">
      <n-card></n-card>
    </n-gi>
  </n-grid>
</template>
<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { drawSex,drawCollege } from './draw';
let sexChart = ref(null)
let collegeChart = ref(null);

onMounted(() => {
  drawSex(sexChart.value!, [640, 520]);
  drawCollege(collegeChart.value!, [12,23,45,56,90,23,45,34,45,67,89,33])
});
</script>
<style lang="scss" scoped>
$card-height: 370px;

.card {
  background-color: #fff;
  border-radius: 20px;
  border: none;
}

.statistics-chart {
  @extend .card;
  height: $card-height;
}

.statistics-data {
  @extend .card;
  height: $card-height;
}

.statistics-sum {
  margin-top: 20px;

  .n-card {
    @extend .card;
    height: 130px;
    padding: 0;
  }
}

.college-container{
  position: relative;
  height:50%; 
  width:50%;
}

.sex-container{
  position: relative;
  height:100%; 
  width:100%;
}
</style>