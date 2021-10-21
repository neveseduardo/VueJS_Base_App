import Layout from '@/layouts/Home'

export default {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
        {
            path: 'home',
            component: () => import('@/views/Home/Home.vue'),
            name: 'Home',
            meta: {
                title: 'Home',
                auth: false,
                role: 'user'
            },
        },
        {
            path: 'about',
            component: () => import('@/views/Home/About.vue'),
            name: 'About',
            meta: {
                title: 'About',
                auth: false,
                role: 'user'
            },
        },
        {
            path: 'contact',
            component: () => import('@/views/Home/Contact.vue'),
            name: 'Contact',
            meta: {
                title: 'Contact',
                auth: false,
                role: 'user'
            },
        },
    ],
}