export default [
    {
        name: "Notificações",
        icon: "ti-bell",
        path: "/admin/notifications",
    },
    {
        name: "Configurações",
        icon: "ti-settings",
        path: "/admin/settings",
    },
    {
        name: "Posts",
        icon: "ti-pencil-alt",
        children: [
            {
                name: "Prestação de Contas",
                path: "/admin/prestacao-contas",
            },
        ],
    },
    {
        name: "Utilitários",
        icon: "nc-icon nc-box",
        children: [
            {
                name: "Prestação de Contas",
                path: "/admin/prestacao-contas",
            },
        ],
    }  
]