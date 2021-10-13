import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from '@/views/Error/NotFound'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/About.vue"),
    },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    scrollBehavior: (to) => {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
});

export default router;
