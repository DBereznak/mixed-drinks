import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FindDrink from "./views/FindDrink.vue";
import FindIngredient from "./views/FindIngredient.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/find-drink",
      name: "find-drink",
      component: FindDrink
    },
    {
      path: "/find-ingredient",
      name: "find-ingredient",
      component: FindIngredient
    }
  ]
});
