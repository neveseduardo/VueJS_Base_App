<template>
    <div class='authentication-container'>
        <div class='authentication-wrapper'>
            <div class='authentication-content'>
                <i class="ti-lock"></i>
                <h2>Login</h2>

                <el-form
                    :model="form"
                    :rules="rules"
                    ref="loginForm"
                    class="demo-ruleForm"
                >
                    <el-form-item
                        label="E-mail"
                        prop="email"
                    >
                        <el-input
                            v-model="form.email"
                            placeholder="Digite seu email"
                            type="email"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Senha"
                        prop="password"
                    >
                        <el-input
                            type="password"
                            v-model="form.password"
                            placeholder="mínimo de 6 caracteres"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button
                            :loading="loading"
                            class="btn-block"
                            type="primary"
                            @click="submitForm('loginForm')"
                        >ENTRAR</el-button>
                    </el-form-item>
                </el-form>

                <div class="text-center">
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import validator from '@/utils/validator'
import { methods } from '@/utils/methods'
import { login } from '@/services/authentication'

export default {
    data() {
        return {
            loading: false,
            form: {
                email: 'user@example.com',
                password: '123456',
            },
            rules: {
                email: [
                    {
                        validator: function (rule, value, callback) {
                            if (methods.isEmpty(value)) {
                                return callback(
                                    new Error(
                                        'O campo email não pode ser vazio'
                                    )
                                )
                            }
                            if (!validator.isEmail(value)) {
                                return callback(
                                    new Error('O formato de email é inválido')
                                )
                            }
                            return callback()
                        },
                        trigger: 'change',
                    },
                ],
                password: [
                    {
                        validator: function (rule, value, callback) {
                            if (methods.isEmpty(value)) {
                                return callback(
                                    new Error(
                                        'O campo senha não pode ser vazio'
                                    )
                                )
                            }
                            if (value.length < 6) {
                                return callback(
                                    new Error(
                                        'O campo senha deve conter pelo menos 6 caracteres'
                                    )
                                )
                            }
                            return callback()
                        },
                        trigger: 'change',
                    },
                ],
            },
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true
                    
                    setTimeout(() => {
                        if (this.login()) {
                            const logIn = login({
                                ...this.form,
                                token: this.generateToken(),
                            })

                            if (logIn) {
                                this.loading = false
                                return this.redirect({ name: 'Dashboard' })
                            }
                        }
                        this.loading = false
                        this.$message.error('Erro ao autenticar!')
                    }, 1000)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        login() {
            const { email, password } = this.form

            if (email !== 'user@example.com') return false
            if (password !== '123456') return false

            return true
        },
    },
}
</script>

<style>
</style>