import Vue from "vue";
import VueRouter from "vue-router";
import MaskedInput from "vue-text-mask";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import Registration from "./components/Registration.vue";
import Authorization from "./components/Authorization.vue";
import Cabinet from "./components/Cabinet.vue";
import SingLogIn from "./components/SingLogIn.vue";

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.component("masked-input", MaskedInput);
Vue.component("singLogIn", SingLogIn);

var router = new VueRouter({
  base: "/js--vue-test-sirion.soft/",
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
