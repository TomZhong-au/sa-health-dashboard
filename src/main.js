import "./assets/main.css";
import "leaflet/dist/leaflet.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Dashboard from "./pages/Dashboard.vue";
import Map from "./pages/MapPage.vue";
import { createPinia } from "pinia";

const routes = [
  { path: "/", name: "Home", component: Dashboard },
  { path: "/map", name: "About", component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount("#app");
