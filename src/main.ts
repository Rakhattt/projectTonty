import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "../src/assets/scss/index.scss";
import { VueDraggableNext } from 'vue-draggable-next'


const app = createApp(App);
const pinia = createPinia();

app.component('draggable', VueDraggableNext)
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");
