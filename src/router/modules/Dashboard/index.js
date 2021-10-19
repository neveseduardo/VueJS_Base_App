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
                title: 'Dashboard'
            },
        },
        {
            path: 'profile',
            component: () => import('@/views/Dashboard/Profile.vue'),
            name: 'Perfil',
            meta: {
                auth: true,
                title: 'Perfil'
            },
        },
        {
            path: 'settings',
            component: () => import('@/views/Dashboard/Settings.vue'),
            name: 'Configurações',
            meta: {
                auth: true,
                title: 'Configurações'
            },
        },
        {
            path: 'notifications',
            component: () => import('@/views/Dashboard/Notifications.vue'),
            name: 'Notificações',
            meta: {
                auth: true,
                title: 'Notificações'
            },
        },
        {
            path: 'tables',
            component: () => import('@/views/Dashboard/Tables.vue'),
            name: 'Tables',
            meta: {
                auth: true,
                title: 'Tables'
            },
        },
        {
            path: 'forms',
            component: () => import('@/views/Dashboard/Forms.vue'),
            name: 'Forms',
            meta: {
                auth: true,
                title: 'Forms'
            },
        },
        {
            path: 'themifyicons',
            component: () => import('@/views/Dashboard/ThemifyIcons.vue'),
            name: 'ThemifyIcons',
            meta: {
                auth: true,
                title: 'ThemifyIcons'
            },
        },
        {
            path: 'fontawesomeicons',
            component: () => import('@/views/Dashboard/FontAwesomeIcons.vue'),
            name: 'Fontawesome',
            meta: {
                auth: true,
                title: 'Fontawesome'
            },
        },
    ]
}