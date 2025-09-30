import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // si usas router
import "./style.css"; // tailwind y estilos globales

createApp(App).use(router).mount("#app");
x``