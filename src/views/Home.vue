<template>
    <div class="home">
        <Hello msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
    name: 'Home',
    components: {
        Hello,
    },
}
</script>
