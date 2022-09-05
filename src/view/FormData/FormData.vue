<template>
    <n-space vertical>
        <n-layout>
            <n-layout-header>
                <n-space align="center">
                    <n-text>请选择要搜索的字段:</n-text>
                    <n-select v-model:value="selectValue" :options="options" />
                    <n-text>请输入要搜索的内容:</n-text>
                    <n-input
                        v-model:value="searchValue"
                        type="text"
                        placeholder="请输入要搜索的内容"
                    />
                    <n-button type="success"> 重置 </n-button>
                    <n-button type="info"> 一键导出 </n-button>
                </n-space>
            </n-layout-header>
            <n-layout-content content-style="padding: 24px;">
                <n-data-table :columns="tableHead" :data="tableData" :pagination="pagination" />
            </n-layout-content>
        </n-layout>
    </n-space>
    <detail-dialog ref="detailDialog" :rowData="currentRowData"></detail-dialog>
</template>
<script lang="ts" setup>
import { ref,onMounted, Ref } from "vue";
import DetailDialog from "./DetailDialog.vue"
// 导入选择器配置
import{ options,createTableHead }from "./formData.config";
import {IFormData} from "./data.type"
import {fakeData} from "./fakedata.mock"
// 选择器的绑定
let selectValue = ref("department1");
// 搜索框绑定
let searchValue = ref(null);
// 详细弹窗
let detailDialog = ref();
// 数据表数据
let tableData=ref(fakeData);

let currentRowData: Ref<string[]|null>  = ref(null);


const tableHead=createTableHead({
    detail(row:IFormData){
        // 打开查看详细信息
        detailDialog.value.dialogStatus=true;
        currentRowData.value=Object.values(row);
    }
})
;
const pagination={
    pageSize: 8
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
    height:calc(100vh - 180px - 57px);
}
</style>
