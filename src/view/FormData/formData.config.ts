import { h } from "vue";
import { NButton } from "naive-ui";
import type { DataTableColumns } from "naive-ui";
import { IFormData } from "./data.type";
// 搜索下拉配置
export const options = [
  {
    label: "学号",
    value: "sno",
  },
  {
    label: "姓名",
    value: "name",
  },
  {
    label: "性别",
    value: "sex",
  },
  {
    label: "学院",
    value: "college",
  },
  {
    label: "专业",
    value: "major",
  },
  {
    label: "第一意向部门",
    value: "department1",
  },
  {
    label: "第二意向部门",
    value: "department2",
  },
  {
    label: "联系电话",
    value: "tel",
  },
  {
    label: "自我介绍",
    value: "introduction",
  },
];

// 数据表表头配置
export const createTableHead = ({
  detail,
}: {
  detail: (row: IFormData) => void;
}): DataTableColumns<IFormData> => {
  return [
    {
      title: "学号",
      key: "sno",
    },
    {
      title: "姓名",
      key: "name",
    },
    {
      title: "性别",
      key: "sex",
    },
    {
      title: "学院",
      key: "college",
    },
    {
      title: "专业",
      key: "major",
    },
    {
      title: "第一意向部门",
      key: "department1",
    },
    {
      title: "第二意向部门",
      key: "department2",
    },
    {
      title: "联系电话",
      key: "tel",
    },
    {
      title: "自我介绍",
      key: "introduction",
    },
    {
      title: "详细",
      key: "detail",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            onClick: () => detail(row),
          },
          {
            default: () => "查看详细",
          }
        );
      },
    },
  ];
};
