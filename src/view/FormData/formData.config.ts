import { h } from "vue";
import { NButton, NEllipsis } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import { IFormData,DrawData,DepartmentName,Legend } from "./data.type";
// 搜索下拉配置
export const options = [
  {
    label: "学号",
    value: "学号",
  },
  {
    label: "姓名",
    value: "姓名",
  },
  {
    label: "性别",
    value: "性别",
  },
  {
    label: "学院",
    value: "学院",
  },
  {
    label: "专业",
    value: "专业",
  },
  {
    label: "联系电话",
    value: "联系方式",
  },
  {
    label: "第一志愿部门",
    value: "第一志愿部门",
  },
  {
    label: "第二志愿部门",
    value: "第二志愿部门",
  },
  
  {
    label: "自我介绍",
    value: "自我介绍",
  },
  {
    label: "是否服从调剂",
    value: "是否服从调剂",
  },
];

// 表头操作列的配置
export const operationConfig:string[]=["详细","删除"]

// 数据表表头配置
export const createTableHead = ({
  detail,
  deleteItem

}: {
  detail: (row: IFormData) => void,
  deleteItem:(id:number) => void
}): DataTableColumns<IFormData> => {
  return [
    {
      title: "学号",
      key: "stu_id",
      align:"center"
    },
    {
      title: "姓名",
      key: "name",
      fixed:"left",
      align:"center"
    },
    {
      title: "性别",
      key: "sex",
      align:"center"
    },
    {
      title: "学院",
      key: "department",
      width:220,
      align:"center"
    },
    {
      title: "专业",
      key: "major",
      align:"center"
    },
    {
      title: "第一志愿部门",
      key: "intention1",
      align:"center"
    },
    {
      title: "第二志愿部门",
      key: "intention2",
      align:"center"
    },
    {
      title: "联系电话",
      key: "phone",
      align:"center"
    },
    {
      title: "自我介绍",
      key: "introduce",
      align:"center",
      render(row) {
        return h(
          NEllipsis,
          {
            style: "max-width: 120px",
          },
          {
            default: () => row.introduce,
          }
        );
      },
    },
    {
      title: "是否服从调剂",
      key: "adjust",
      align:"center"
    },
    {
      title: "操作",
      key: "operation",
      fixed: 'right',
      align:"center",
      render(row) {
        return row.operationConfig.map(operation =>{
          return h(
            NButton,
            {
              size: "small",
              color:operation===operationConfig[0]?"#3c80f2":"#c63351",
              ghost:true,
              style:{
                "margin-right":operation===operationConfig[0]?"15px":"0px",
              },
              onClick: () =>{
                if(operation===operationConfig[0]){
                  detail(row)
                }else if(operation===operationConfig[1]){
                  deleteItem(row.id)
                }
              },
            },
            {
              default: () => operation,
            }
          );
        })
      },
    },
  ];
};
// 统计部门数据的数据模板
export let drawData:DrawData[] =[
  {
    label: DepartmentName.Website,
    type:Legend.Intention1,
    value:0
  },{
    label: DepartmentName.Website,
    type:Legend.Intention2,
    value:0
  },{
    label: DepartmentName.Administeration,
    type:Legend.Intention1,
    value:0
  },{
    label: DepartmentName.Administeration,
    type:Legend.Intention2,
    value:0
  },{
    label: DepartmentName.Informatization,
    type:Legend.Intention1,
    value:0
  },{
    label: DepartmentName.Informatization,
    type:Legend.Intention2,
    value:0
  },{
    label: DepartmentName.Network,
    type:Legend.Intention1,
    value:0
  },{
    label: DepartmentName.Network,
    type:Legend.Intention2,
    value:0
  }
]