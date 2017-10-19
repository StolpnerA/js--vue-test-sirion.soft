import Vue from "vue";
import App from "./App.vue";
import Registration from "./components/Registration.vue";

Vue.component("app-registration", Registration);

new Vue({
  el: "#app",
  render: h => h(App)
});
