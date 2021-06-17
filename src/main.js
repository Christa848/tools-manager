import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVueIcons } from 'bootstrap-vue';
import VueTableDynamic from 'vue-table-dynamic';
import './axios';
//import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';

Vue.use(VueTableDynamic)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
