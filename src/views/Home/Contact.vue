<template>
    <div class="home">
        <div class='home-container'>
            <div class='home-wrapper'>
                <div class='home-content'>
                    <div class='home-section'>
                        <div class='home-section-wrapper home-section-main home-contact'>
                            <div class='row'>
                                <div class='col-12 col-md-6 form-group'>
                                    <img
                                        :src="require('@/assets/images/contact.png')"
                                        alt=""
                                        title="first-section"
                                    >
                                </div>
                                <div class='col-12 col-md-6 form-group'>
                                    <h1>Entre em contato</h1>
                                    <p>Gostou do que viu e quer bater um papo dev? Vou deixar aqui em baixo alguns dos meus endereços pra que voçê possa fazer contato.</p>
                                    <div class="mb-5">
                                        <h4>E-mail:</h4>
                                        <div>
                                            <a class="mr-2">neveseduardoti@gmail.com</a>
                                        </div>
                                        <h4>LinkedIn: </h4>
                                        <div>
                                            <a target="blank" href="http://linkedin.com/in/neveseduardoti" class="mr-2">linkedin.com/in/neveseduardoti</a>
                                        </div>
                                        <h4>Github: </h4>
                                        <div>
                                            <a target="blank" href="http://github.com/neveseduardo" class="mr-2">github.com/neveseduardo</a>
                                        </div>
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

