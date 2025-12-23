import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
// Import Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "bootstrap-icons/font/bootstrap-icons.css"

// global component baseButton

import baseButton from "./components/base/baseButton.vue";
import baseInput from "./components/base/baseInput.vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// register btn components in main.js
app.component("BaseButton", baseButton, "baseInput", baseInput);

app.mount("#app");
