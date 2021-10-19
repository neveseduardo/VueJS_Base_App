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
import 'perfect-scrollbar/dist/css/perfect-scrollbar.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import { methods, filters } from '@/utils'
import SideBar from '@/components/UIComponents/SidebarPlugin'
import links from '@/components/UIComponents/SidebarPlugin/links'
import initProgress from '@/progressbar'
import JQuery from 'jquery'
import VueTheMask from 'vue-the-mask'

window.$ = JQuery
Vue.use(VueTheMask)
Vue.use(SideBar, { sidebarLinks: links })
Vue.use(ElementUI, {
    locale
})
Vue.mixin({
    methods: methods,
    filters: filters
})

Vue.config.productionTip = false;

initProgress(router);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
