import Vue from "vue";
import Fdft from "./Fdft.vue";
import store from "./store";

// framework
import "bootstrap";
import "@/_sass/app.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Fdft)
}).$mount("#fdft");
