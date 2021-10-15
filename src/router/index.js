import Vue from "vue";
import Router from "vue-router";
import NotFound from '@/views/Error/NotFound'
import DashboardLayout from '@/layouts/Dashboard'
import HomeLayout from '@/layouts/Home'

Vue.use(Router);

const routes = [
    {
        path: '',
        component: HomeLayout,
        redirect: 'home',
        children: [{
            path: 'home',
            component: () => import('@/views/Home/Home.vue'),
            name: 'Home',
            meta: {
                title: 'Home',
                auth: false,
                role: 'user'
            },
        },],
    },
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: 'admin/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
                name: 'Dashboard',
                meta: {
                    auth: true,
                    role: 'admin',
                    title: 'Dashboard'
                },
            },
            {
                path: 'profile',
                component: () => import('@/views/Dashboard/Profile.vue'),
                name: 'Perfil',
                meta: {
                    auth: true,
                    role: 'admin',
                    title: 'Perfil'
                },
            },
            {
                path: 'settings',
                component: () => import('@/views/Dashboard/Settings.vue'),
                name: 'Configurações',
                meta: {
                    auth: true,
                    role: 'admin',
                    title: 'Configurações'
                },
            },
            {
                path: 'notifications',
                component: () => import('@/views/Dashboard/Notifications.vue'),
                name: 'Notificações',
                meta: {
                    auth: true,
                    role: 'admin',
                    title: 'Notificações'
                },
            },
        ]
    },
    // { path: '*', component: NotFound }
];

const createRouter = () => new Router({
    //mode: 'history', // não funciona com laravel nativamente
    scrollBehavior: () => ({
        y: 0
    }),
    base: '/',
    routes: routes,
});

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}



export default router;
