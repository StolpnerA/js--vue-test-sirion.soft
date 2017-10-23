import Vue from "vue";
import VueRouter from "vue-router";
import MaskedInput from "vue-text-mask";
import App from "./App.vue";
import Registration from "./components/Registration.vue";
import Authorization from "./components/Authorization.vue";
import Cabinet from "./components/Cabinet.vue";

Vue.use(VueRouter);
Vue.component("masked-input", MaskedInput);

var router = new VueRouter({
  routes: [
    { path: "/authorization", component: Authorization },
    { path: "/registration", component: Registration },
    { path: "/cabinet", component: Cabinet }
  ]
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
});
