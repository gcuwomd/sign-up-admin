import {
  createRouter,
  createWebHashHistory,
  onBeforeRouteLeave,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./../view/Login/Login.vue"),
    name: "Login",
    meta: {
      position: "Login",
    },
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("../view/Index/Index.vue"),
    meta: {
      position: "Index",
    },
    children: [
      // 统计
      {
        path: "statistics",
        name: "Statistics",
        component: () => import("./../view/statistics/Statistics.vue"),
        meta:{
          position: "Statistics",
        }
      },
      // 表单数据
      {
        path: "data",
        name: "FormData",
        component: () =>import("./../view/FormData/FormData.vue"),
        meta: {
          position: "FormData"
        }
      },
      // 关于
      {
        path: "about",
        name: "About",
        component: () =>import("./../view/About/about.vue"),
        meta: {
          position: "About"
        }
      },
    ],
  },
  // 404 页
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./../page/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {

});

export { router };
