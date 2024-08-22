import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "../src/assets/scss/index.scss";
import { VueDraggableNext } from 'vue-draggable-next'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
const pinia = createPinia();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.component('draggable', VueDraggableNext)
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");
