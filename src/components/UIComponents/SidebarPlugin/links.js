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
        name: "Tabelas",
        icon: "ti-view-list-alt",
        path: "/admin/tables",
    },
    {
        name: "Formulários",
        icon: "ti-clipboard",
        path: "/admin/forms",
    },
    {
        name: "Themify",
        icon: "ti-themify-favicon",
        path: "/admin/themifyicons",
    },
    {
        name: "Fontawesome",
        icon: "fab fa-font-awesome",
        path: "/admin/fontawesomeicons",
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