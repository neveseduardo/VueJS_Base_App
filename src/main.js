import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import '@/assets/scss/app.scss'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt-br'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import { methods } from '@/utils/methods'

Vue.use(ElementUI, {
	locale
})
Vue.mixin({
	methods: methods
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
