<template>
    <div class="user">
        <div class="photo">
            <img
                src="http://www.gravatar.com/avatar/?d=retro&s=45"
                alt="user avatar"
            />
        </div>
        <div class="info">
            <a
                data-toggle="collapse"
                :aria-expanded="!isClosed"
                @click="toggleMenu"
                href="#"
            >
                <span>
                    Default User
                    <b class="caret"></b>
                </span>
            </a>
            <div class="clearfix"></div>
            <div>
                <collapse-transition>
                    <ul
                        class="nav nav-menu"
                        v-show="!isClosed"
                    >
                        <li>
                            <router-link to="/admin/profile">
                                <span class="sidebar-mini-icon">M</span>
                                <span class="sidebar-normal">Meu perfil</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <span class="sidebar-mini-icon">S</span>
                                <span class="sidebar-normal">Sair</span>
                            </a>
                        </li>
                    </ul>
                </collapse-transition>
            </div>
        </div>
    </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
    components: {
        CollapseTransition,
    },
    data() {
        return {
            isClosed: true,
        }
    },
    methods: {
        toggleMenu() {
            this.isClosed = !this.isClosed
        },
    },
}
</script>
<style scoped>
.nav.nav-menu {
    margin-top: 0;
}
</style>
