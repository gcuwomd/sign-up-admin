<template>
  <n-modal v-model:show="dialogStatus">
    <n-card style="width: 600px" title="详细信息" :bordered="false" size="huge" role="dialog" aria-modal="true">

      <n-grid cols="2" item-responsive responsive="screen">
        <n-gi span="1">
          <n-image width="200" height="300" object-fit="contain" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </n-gi>
        <n-gi span="1">
          <n-space vertical>
            <div v-for="item,index in props.rowData">
              {{formatInfo(index,item)}}
            </div>
          </n-space>
        </n-gi>
      </n-grid>

    </n-card>
  </n-modal>
</template>
<script lang="ts" setup>
import {defineProps,defineExpose,Ref,ref} from 'vue'
import { options } from './formData.config';
import {IFormData} from './data.type'

const props=defineProps<{
    rowData?:string[]
}>()

// 弹窗控制
let dialogStatus=ref(false)

// 格式化详细信息
function formatInfo(index:number,content:string):string{
  return `${options[index].label}: ${content}`
}

// 暴露给父组件的属性方法
defineExpose({
    dialogStatus
})

</script>
<style lang="scss" scoped>

</style>