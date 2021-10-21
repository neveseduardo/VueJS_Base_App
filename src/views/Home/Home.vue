<template>
    <div class="home">
        <div class='home-container'>
            <div class='home-wrapper'>
                <div class='home-content'>
                    <section class="page-banner">
                        <div class='row d-flex'>
                            <div class='col-12 col-md-6'>
                                <img
                                    :src="require('@/assets/images/first-section.png')"
                                    alt=""
                                    title="first-section"
                                >
                            </div>
                            <div class='col-12 col-md-6'>
                                <div class="page-banner-text">
                                    <h1 class="block-title">Um template completo desenvolvido em Vuejs.</h1>
                                    <p>Programs to help children with disabilities in Western MA at all ages and levels of need.</p>
                                    <el-button
                                        @click="redirect({name: 'Contact'})"
                                        type="primary"
                                    >Entre em contato</el-button>
                                    <el-button
                                        @click="redirect({name: 'About'})"
                                        type="plain"
                                    >SAIBA MAIS</el-button>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section class="page-author">
                        <div class='row d-flex'>

                            <div class='col-12 col-md-6'>
                                <div class="page-banner-text">
                                    <h1 class="block-title">Com um design clean e de fácil manutenabilidade.</h1>
                                    <p>Programs to help children with disabilities in Western MA at all ages and levels of need.</p>
                                    <el-button
                                        @click="redirect({name: 'Contact'})"
                                        type="primary"
                                    >Entre em contato</el-button>
                                    <el-button
                                        @click="redirect({name: 'About'})"
                                        type="plain"
                                    >SAIBA MAIS</el-button>
                                </div>
                            </div>

                            <div class='col-12 col-md-6'>
                                <img
                                    :src="require('@/assets/images/second-section.png')"
                                    alt=""
                                    title="first-section"
                                >
                            </div>

                        </div>

                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
