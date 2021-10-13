<template>
    <div>
        <div class="message">
            {{ message }}
        </div>
        Digite seu nome de usuário: <input v-model="username" />
        <div v-if="error" class="error">
            Por favor, digite um nome de usuário com pelo menos sete letras.
        </div>
    </div>
</template>

<script>
export default {
    name: 'Foo',

    data() {
        return {
            message: 'Bem-vindo ao livro de receitas do Vue.js',
            username: '',
        }
    },

    computed: {
        error() {
            return this.username.trim().length < 7
        },
    },
}
</script>