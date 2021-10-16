import Layout from '@/layouts/Dashboard'

export default {
    path: '/admin',
    component: Layout,
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
}