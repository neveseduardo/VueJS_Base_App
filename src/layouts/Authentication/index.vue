<template>
    <div class="wrapper">
        <div class="home-panel">
            <top-navbar></top-navbar>

            <dashboard-content>
            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>

<script>
import TopNavbar from '@/layouts/Authentication/components/Header'
import ContentFooter from '@/layouts/Authentication/components/Footer'
import DashboardContent from '@/layouts/Authentication/components/Content'

export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
    },
}
</script>
