<template>
    <div class="wrapper">
        <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">
            <user-menu></user-menu>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">
            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from '@/layouts/Dashboard/components/Header'
import ContentFooter from '@/layouts/Dashboard/components/Footer'
import DashboardContent from '@/layouts/Dashboard/components/Content'
import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue'

export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        UserMenu,
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false)
            }
        },
    },
}
</script>
