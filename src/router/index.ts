import {
  createRouter,
  createWebHashHistory,
  onBeforeRouteLeave,
} from "vue-router";
import Login from "./../view/Login/Login.vue";
import Index from "../view/Index/Index.vue"
import NotFound from "./../page/404.vue";
const routes = [
  {
    path: "/",
    component: Login,
    name: "Login",
    meta: {
      position: "Login",
    },
  },
  {
    path: "/index",
    name: "Index",
    component:Index,
    meta: {
      position: "Index",
    }
  }
  ,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to);
});

export { router };
