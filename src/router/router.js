import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Market from "../views/Market.vue";
import CheckCurrency from "@/views/CheckCurrency.vue";
import BuyCurrency from "@/views/BuyCurrency.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/market",
    name: "Market",
    component: Market,
  },
  {
    path: "/currency",
    name: "Currency",
    component: CheckCurrency,
  },
  {
    path: "/buy",
    name: "BuyCurrency",
    component: BuyCurrency,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
