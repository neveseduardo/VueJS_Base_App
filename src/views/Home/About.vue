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
                                        :src="require('@/assets/images/first-section.png')"
                                        alt=""
                                        title="first-section"
                                    >
                                </div>
                                <div class='col-12 col-md-6 form-group'>
                                    <h1>Sobre o template</h1>
                                    <p>Você vai econtrar dentro deste template as melhores ferramentas para desenvolver um aplicação sem precisar começar do zero.</p>
                                    <h4>Principais bibliotecas incorporadas:</h4>
                                    <div class="mb-5">
                                        <el-tag class="mr-2">Vue router</el-tag>
                                        <el-tag class="mr-2">Vuex</el-tag>
                                        <el-tag class="mr-2">Axios</el-tag>
                                        <el-tag class="mr-2">Moment</el-tag>
                                        <el-tag class="mr-2">Money</el-tag>
                                        <el-tag class="mr-2">The mask</el-tag>
                                    </div>
                                    <div>
                                        <el-button type="plain" @click.prevent="redirect({ name: 'Home' })">Voltar pra a home</el-button>
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
export default {}
</script>

