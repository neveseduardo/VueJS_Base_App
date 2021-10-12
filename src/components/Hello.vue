<template>
    <div>
        <input v-model="username" />
        <div v-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            username: '',
        }
    },

    computed: {
        error() {
            return this.username.trim().length < 7
                ? 'Por favor insira um nome de usuário mais longo'
                : ''
        },
    },
}
</script>