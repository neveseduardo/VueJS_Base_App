import Layout from '@/layouts/Home'

export default {
    path: '',
    component: Layout,
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
}