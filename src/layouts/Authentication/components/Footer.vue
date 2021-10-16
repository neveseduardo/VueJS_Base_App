<template>
    <footer class="authentication-footer">
        <p>&copy; Criado por {{ author }}</p>
    </footer>
</template>

<script>

export default {
    computed: {
        author() {
            return process.env.VUE_APP_AUTHOR
        }
    }
}
</script>
