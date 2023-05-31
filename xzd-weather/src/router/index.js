import { createRouter, createWebHistory } from "vue-router";

// 导入需要使用的组件
import Home from "../views/Home.vue";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/weather/:city/:geocode",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
