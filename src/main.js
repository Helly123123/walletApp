import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router/router";

const app = createApp(App);
app.use(router); // Используем Vue Router
app.mount("#app");
