<template>
    <navbar v-model="showNavbar">
        <div class="navbar-wrapper">
            <div class="navbar-minimize">
                <button
                    id="minimizeSidebar"
                    class="btn btn-icon btn-round"
                    @click="minimizeSidebar"
                >
                    <i class="ti-menu-alt text-center visible-on-sidebar-mini"></i>
                    <i
                        style="transform: rotate(90deg)"
                        class="ti-more-alt text-center visible-on-sidebar-regular"
                    ></i>
                </button>
            </div>
            <div class="navbar-toggle">
                <navbar-toggle-button @click.native="toggleSidebar">
                </navbar-toggle-button>
            </div>
            <a
                class="navbar-brand"
                href="#pablo"
            >{{ this.$route.name }}</a>
        </div>

        <template slot="navbar-menu">
            <form>
                <div
                    class="input-group no-border"
                    ref="autocompleteWrapper"
                >
                    <el-autocomplete
                        ref="autocomplete"
                        class="inline-input"
                        v-model="search"
                        :fetch-suggestions="querySearch"
                        placeholder="Pesquisar menu..."
                        clearable
                        v-on:clear="onClear"
                        @select="handleSelect"
                    >
                        <i
                            slot="suffix"
                            class="el-input__icon el-icon-search"
                        ></i>
                    </el-autocomplete>
                </div>
            </form>

            <ul class="navbar-nav">
                <el-dropdown
                    class="nav-item"
                    trigger="click"
                >
                    <div class="avatar-wrapper nav-link">
                        <i class="ti-bell ti-icon"></i>
                        <p class="notifications">5<b class="caret"></b></p>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/profile/index">
                            <el-dropdown-item>Notificações</el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>Mensagens</el-dropdown-item>
                        </router-link>
                    </el-dropdown-menu>
                </el-dropdown>

                <li class="nav-item">
                    <a
                        @click.prevent="redirect('Configurações')"
                        class="nav-link btn-rotate"
                        href="#"
                    >
                        <i class="nc-icon nc-settings-gear-65"></i>
                        <p>
                            <span class="d-lg-none d-md-block">CONFIGURAÇÕES</span>
                        </p>
                    </a>
                </li>

                <el-dropdown
                    class="nav-item"
                    trigger="click"
                >
                    <div class="avatar-wrapper nav-link">
                        <i class="ti-user ti-icon"></i>
                        <i class="el-icon-caret-bottom" />

                        <span class="d-lg-none d-md-block">CONFIGURAR PERFIL</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <a
                                href="#"
                                @click.prevent="redirect({ name: 'Profile' })"
                                class="d-block"
                            >Meu prefil</a>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <a
                                class="d-block"
                                @click.prevent="logout"
                            >Sair</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </ul>
        </template>
    </navbar>
</template>

<script>
import { Navbar, NavbarToggleButton } from 'src/components/UIComponents'

export default {
    components: {
        Navbar,
        NavbarToggleButton,
    },
    data() {
        return {
            activeNotifications: false,
            showNavbar: false,
            notificacao: [],
            notificacaoNaoLida: null,
            id_notificacao_beneficiario_array: [],
            usuario: JSON.parse(localStorage.getItem('usuario')),
            links: [],
            search: '',
        }
    },
    methods: {
        onClear() {
            this.$refs.autocompleteWrapper.focus()
        },
        querySearch(queryString, cb) {
            var links = this.links
            var results = queryString
                ? links.filter(this.createFilter(queryString))
                : links
            cb(results)
        },
        createFilter(queryString) {
            return (link) => {
                return link.value
                    .toLowerCase()
                    .includes(queryString.toLowerCase())
            }
        },
        loadAll() {
            let userArr = []
            this.$sidebar.sidebarLinks.map((item) => {
                if (item?.children) {
                    item.children.map((children) => {
                        userArr.push({
                            value:
                                this.capitalize(item.name) +
                                '/' +
                                this.capitalize(children.name),
                            link: children.path,
                        })
                    })
                } else {
                    userArr.push({
                        value: this.capitalize(item.name),
                        link: item.path,
                    })
                }
            })
            return userArr
        },
        handleSelect(item) {
            this.state1 = ''
            this.redirect(item.link)
        },
        logout() {
            outUser()
            this.redirect('UserLogin')
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications
        },
        closeDropDown() {
            this.activeNotifications = false
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false)
        },
        minimizeSidebar() {
            this.$sidebar.toggleMinimize()
        },
        toggleNavbar() {
            this.showNavbar = !this.showNavbar
        },
    },
    mounted() {
        this.links = this.loadAll()
    },
}
</script>
