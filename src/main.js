import { createPinia } from "pinia";

import { createApp } from "vue";
import App from "./App.vue";

import "./styles/style.css";

createApp(App).use(createPinia()).mount("#app");
