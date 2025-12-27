import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.vue";
import router from "./router";

// Base components
import BaseButton from "./components/base/BaseButton.vue";
import BaseInput from "./components/base/BaseInput.vue";
import BaseCard from "./components/base/BaseCard.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseCard", BaseCard);

app.mount("#app");
