import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap-icons/font/bootstrap-icons.css";

// global component baseButton



import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/base/baseButton.vue";
import BaseInput from "./components/base/baseInput.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// register btn components in main.js
app.component("BaseButton", BaseButton, "BaseInput", BaseInput);

app.mount("#app");
