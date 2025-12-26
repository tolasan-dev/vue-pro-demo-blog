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
import BaseButton from "./components/base/BaseButton.vue";
import BaseInput from "./components/base/BaseInput.vue";
import BaseCard from "./components/base/baseCard.vue";


// Define object 
const app = createApp(App);
app.use(createPinia());
app.use(router);


// register btn components in main.js
app.component("BaseButton", BaseButton, "BaseInput", BaseInput, "BaseCard",BaseCard);
app.mount("#app");
