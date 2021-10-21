<template>
    <div class='notfound-container'>
        <div class='notfound-wrapper'>
            <h1>Oops! A página não foi encontrada.</h1>

            <img
                :src="require('@/assets/images/404.png')"
                alt=""
                title="NOTFOUND_ERROR"
            >

            <a
                href='#'
                @click.stop.prevent="redirect({ name: 'Home' })"
            >Voltar para a página principal.</a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>