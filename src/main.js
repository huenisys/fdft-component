import Vue from "vue";
import Fdft from "./Fdft.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Fdft)
}).$mount("#fdft");
