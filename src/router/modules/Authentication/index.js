import Layout from '@/layouts/Authentication'

export default {
    path: '/auth',
    component: Layout,
    redirect: 'auth/login',
    children: [
        {
            path: 'login',
            component: () => import('@/views/Authentication/Login.vue'),
            name: 'Login',
            meta: {
                auth: false,
                title: 'Login'
            },
        }        
    ]
}