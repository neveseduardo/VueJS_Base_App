import Vue from "vue";
import Router from "vue-router";
import NotFound from '@/views/Error/NotFound'
import AuthRoutes from '@/router/modules/Authentication'
import DashboardRoutes from '@/router/modules/Dashboard'
import HomeRoutes from '@/router/modules/Home'

Vue.use(Router);

const routes = [
    AuthRoutes,
    DashboardRoutes,
    HomeRoutes,
    { path: '*', component: NotFound }
];

const createRouter = () => new Router({
    //mode: 'history', // não funciona com laravel nativamente
    base: '/',
    routes: routes,
    linkActiveClass: 'active',
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}



export default router;
