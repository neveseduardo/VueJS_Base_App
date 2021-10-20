<template>
    <div class='card row'>
        <div class='card-body'>
            <h5>Formulários</h5>

            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                class="demo-ruleForm"
            >
                <el-row :gutter="20">
                    <el-col
                        :span="24"
                        :md="12"
                    >
                        <el-form-item
                            label="Name"
                            prop="name"
                        >
                            <el-input
                                type="text"
                                v-model="ruleForm.name"
                                placeholder="Nome"
                            ></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col
                        :span="24"
                        :md="12"
                    >
                        <el-form-item
                            label="Email"
                            prop="email"
                        >
                            <el-input
                                type="email"
                                v-model="ruleForm.email"
                                placeholder="Ex: email@email.com"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col
                        :span="24"
                        :md="12"
                    >
                        <el-form-item
                            label="Salário"
                            prop="salary"
                        >
                            <money
                                class="el-input__inner"
                                v-model="ruleForm.salary"
                                v-bind="money"
                                @blur.native="clearValidate('ruleForm', 'salary')"
                            ></money>
                        </el-form-item>
                    </el-col>
                    <el-col
                        :span="24"
                        :md="12"
                    >
                        <el-form-item
                            label="Idade"
                            prop="age"
                        >
                            <el-input
                                type="number"
                                v-model="ruleForm.age"
                                placeholder="Ex: 23"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row
                    type="flex"
                    class="row-bg"
                    justify="end"
                >
                    <el-form-item>
                        <el-button @click="resetForm('ruleForm')">Limpar</el-button>
                        <el-button
                            type="primary"
                            @click="submitForm('ruleForm')"
                            :loading="loading"
                        >Registrar</el-button>
                    </el-form-item>
                </el-row>

            </el-form>
        </div>
    </div>
</template>

<script>
import { messages, methods, validator } from '@/utils'
import NProgress from 'nprogress'

export default {
    data() {
        return {
            loading: false,
            money: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                suffix: '',
                precision: 2,
                maxlength: 15,
                masked: false,
            },
            ruleForm: {
                name: '',
                salary: '',
                email: '',
                age: '',
            },
            rules: this.customRules(),
            formProcessing: false,
            errors: [],
        }
    },
    methods: {
        customRules() {
            return {
                name: [
                    {
                        required: true,
                        message: messages.required,
                        trigger: 'blur',
                    },
                ],
                email: [
                    {
                        validator: function (rule, value, callback) {
                            if (methods.isEmpty(value)) {
                                return callback(new Error(messages.required))
                            }
                            if (!validator.isEmail(value)) {
                                return callback(new Error(messages.email))
                            }
                            return callback()
                        },
                        trigger: 'blur',
                    },
                ],
                salary: [
                    {
                        validator: (rule, value, callback) => {
                            if (value === '' || Number(value) <= 0) {
                                return callback(new Error(messages.required))
                            }
                            return callback()
                        },
                        trigger: 'blur',
                    },
                ],
                age: [
                    {
                        required: true,
                        message: messages.required,
                        trigger: 'blur',
                    },
                ],
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.loading = true

                    setTimeout(() => {
                        this.loading = false
                        this.$message({
                            message: 'Registro inserido com sucesso.',
                            type: 'success',
                        })
                    }, 2000)
                } else {
                    this.formProcessing = true
                    let errors = [
                        {
                            message: 'Campo salário é obrigatório.',
                            path: ['salary'],
                        },
                    ]
                    this.errors = errors
                }
            })
        },
    },
}
</script>