import { createApp } from 'vue'
import './style.css'
import * as echarts from "echarts";
import App from './App.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$echarts = echarts;

app.use(ElementPlus).use(router).use(pinia).mount("#app");

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}