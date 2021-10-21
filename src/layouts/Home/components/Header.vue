<template>
    <header class="home-header">
        <h1>
            <a
                href="#"
                @click.stop.prevent="toggleNav"
                class="toggle"
            ><span class="fa fa-bars"></span></a>
            <router-link to="/">{{ title | toUpper }}</router-link>
        </h1>
        <nav>
            <ul :class="{'show': showNavbar }">
                <a
                    href="#"
                    @click.stop.prevent="toggleNav"
                    class="toggle"
                >
                    <span class="ti-angle-left"></span>
                </a>
                <li>
                    <router-link
                        @click.native.stop.prevent="toggleNav"
                        to="about"
                    >Sobre</router-link>
                    <router-link
                        @click.native.stop.prevent="toggleNav"
                        to="contact"
                    >Contato</router-link>
                    <router-link
                        @click.native.stop.prevent="toggleNav"
                        to="/admin"
                    >PAINEL</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showNavbar: false,
            title: process.env.VUE_APP_TITLE,
        }
    },
    methods: {
        toggleNav() {
            this.showNavbar = !this.showNavbar
        },
    },
}
</script>
