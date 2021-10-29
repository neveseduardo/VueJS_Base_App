<template>
    <div class="home">
        <div class='home-container'>
            <div class='home-wrapper'>
                <div class='home-content'>
                    <div class='home-section'>
                        <div class='home-section-wrapper home-section-main'>
                            <div class='row'>
                                <div class='col-12 col-md-6 form-group'>
                                    <img
                                        :src="require('@/assets/images/second-section.png')"
                                        alt=""
                                        title="first-section"
                                    >
                                </div>
                                <div class='col-12 col-md-6 form-group'>
                                    <h1>{{ title }}</h1>
                                    <p>Um template completão pra você que não quer perder tempo recriando a roda! O template conta com algumas funções gerais e bibliotecas mais utilizadas em desenvolvimento. Além de um design fantástico de dashboard.</p>
                                    <div>
                                        <el-button
                                            type="primary"
                                            @click="redirect({name: 'Dashboard'})"
                                        >Dashboard</el-button>
                                        <el-button
                                            type="plain"
                                            @click="redirect({name: 'About'})"
                                        >Ver mais</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: process.env.VUE_APP_TITLE,
        }
    },
    methods: {
        onClick() {
            alert('cliquei')
        },
    },
}
</script>
