<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header>
        <n-space align="center">
          <n-text>请选择要搜索的字段:</n-text>
          <n-select
            v-model:value="selectValue"
            :options="options"
            @update:value="handleUpdateValue"
          />
          <n-text>请输入要搜索的内容:</n-text>
          <n-input
            v-model:value="searchValue"
            type="text"
            placeholder="请输入要搜索的内容"
            :on-input="handleInput"
          />
          <n-button type="info" @click="onRest">
            <template #icon>
              <n-icon>
                <reset-icon></reset-icon>
              </n-icon>
            </template>
            {{ resetBtnName }}
          </n-button>
          <n-button type="success" @click="onExportExcelFile">
            <template #icon>
              <n-icon>
                <excel-icon></excel-icon>
              </n-icon> </template
            >导出
          </n-button>
          <n-button color="#f3c468" @click="onStatistics">
            <template #icon>
              <n-icon>
                <statistics></statistics>
              </n-icon>
            </template>
            统计</n-button
          >
        </n-space>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <n-data-table
          :columns="tableHead"
          :data="tableData"
          :pagination="pagination"
          max-height="90%"
          :scroll-x="1800"
        />
      </n-layout-content>
    </n-layout>
  </n-space>
  <detail-dialog ref="detailDialog" :rowData="currentRowData"></detail-dialog>
  <statistics-drawer
    ref="statisticsDrawer"
    :statisticsData="statisticsData"
  ></statistics-drawer>
</template>
<script lang="ts" setup>
import { ref, onMounted, Ref, nextTick } from "vue";
import { useMessage, SelectOption } from "naive-ui";
import DetailDialog from "./DetailDialog.vue";
import StatisticsDrawer from "./../Statistics/statistics.vue";
import {
  getAllData,
  getPicture,
  deleteQuestionnaireById,
  queryByKV,
  excelFileExport,
} from "./formData.api";
import { operationConfig } from "./formData.config";
// 导入选择器配置
import { options, createTableHead } from "./formData.config";
import { IFormData, IBackFormData, IStatisticData } from "./data.type";
import {
  PodiumOutline as statistics,
  ReloadOutline as resetIcon,
} from "@vicons/ionicons5";
import { FileExcelOutlined as excelIcon } from "@vicons/antd";

const message = useMessage(); // 消息提醒

// 分页器配置
const pagination = {
  pageSize: 8,
};
// 重置按钮的名称
let resetBtnName = ref("刷新");
// 选择器的绑定
let selectValue = ref("第一志愿部门");
// 搜索框绑定
let searchValue = ref("");
// 详细弹窗
let detailDialog = ref();
// 统计抽屉
let statisticsDrawer = ref();
// 数据表数据
let tableData: Ref<IFormData[] | undefined> = ref();
// 统计数据
let statisticsData: Ref<IStatisticData> = ref({
  headcount: 0,
  man: 0,
  woman: 0,
});

let currentRowData: Ref<Array<IFormData> | null> = ref(null);

const tableHead = createTableHead({
  // 打开查看详细信息
  detail(row: IFormData) {
    currentRowData.value = Object.values(row);
    detailDialog.value.dialogStatus = true;
  },
  // 点击删除问卷
  deleteItem(rowId: number) {
    deleteQuestionnaireById(rowId + "")
      .then(() => {
        message.success("删除成功");
        updateTableData(); // 更新表格
      })
      .catch((e) => {
        message.error("删除失败");
      });
  },
});

updateTableData(); // 初始化表格数据

// 输入框输入时绑定事件
function handleInput(value: string) {
  if (value == "") {
    updateTableData();
  } else {
    resetBtnName.value = "重置";
    updateTableBySearch();
  }
}
// 选择框更新事件
function handleUpdateValue(value: string, option: SelectOption) {
  if (searchValue.value !== "") {
    updateTableBySearch();
  }
}
// 点击重置按钮
function onRest() {
  searchValue.value = "";
  resetBtnName.value = "刷新";
  updateTableData();
}

// 点击一键导出
function onExportExcelFile() {
  excelFileExport().then((res) => {
    let a = document.createElement("a");
    let blob = new Blob([res]);
    let url = window.URL.createObjectURL(blob);
    const date = new Date();
    let fileName =
      "test" +
      `${date.getFullYear()}-` +
      `${date.getMonth() + 1}-` +
      `${date.getDate()}` +
      ".xlsx";
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  });
}

// 点击统计
function onStatistics() {
  statisticsDrawer.value.active = true;
}
// 更新表格数据
async function updateTableData() {
  await getAllData().then((res) => {
    tableData.value = resConversion(res);
  });

  // 更新统计数据
  tableData.value?.forEach((item) => {
    // 总人数统计
    statisticsData.value.headcount++;
    // 男女统计
    if (item.sex === "男") {
      statisticsData.value.man++;
    } else if (item.sex === "女") {
      statisticsData.value.woman++;
    }
  });
}

// 搜索信息更新表格数据
function updateTableBySearch() {
  queryByKV(selectValue.value, searchValue.value).then((res) => {
    tableData.value = resConversion(res);
  });
}

// 把后端的数据转化一下，转化成前端友好的数据
function resConversion(res: any) {
  const data = Array.from(res, (item: IBackFormData) => {
    let { bool, ...rowData } = item;
    rowData.adjust = rowData.adjust ? "是" : "否";
    rowData.operationConfig = operationConfig;
    return rowData;
  });
  return data;
}
</script>
<style lang="scss" scoped>
.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
.n-select {
  min-width: 200px;
}
.n-data-table {
  height: calc(100vh - 180px - 57px);
}
</style>
