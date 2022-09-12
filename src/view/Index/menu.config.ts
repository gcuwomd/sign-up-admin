import { h, Component } from "vue";
import type { MenuOption } from "naive-ui";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  FileTrayFullOutline as data,
  AlertCircleOutline as about,
  ExitOutline as exit,
} from "@vicons/ionicons5";

// 图标渲染
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "FormData",
          },
        },
        { default: () => "数据" }
      ),
    key: "data",
    icon: renderIcon(data),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "About",
          },
        },
        { default: () => "关于" }
      ),
    key: "about",
    icon: renderIcon(about),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Login",
          },
        },
        { default: () => "退出" }
      ),
    key: "exit",
    icon: renderIcon(exit),
  },
];

export default menuOptions;
