import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import colors from "./assets/css/colors.css";
import styles from "./assets/css/style.css"
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  colors,
  styles,
  render: h => h(App)
}).$mount("#app");
