// el-form-item__error

import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Authentication/Login.vue'
import { Form, FormItem, Button, Input } from "element-ui";

const factory = (values = {}) => {
    return shallowMount(Login, {
        stubs: {
            [Form.name]: Form,
            [FormItem.name]: FormItem,
            [Button.name]: Button,
            [Input.name]: Input,
        },
        data() {
            return {
                ...values
            }
        }
    })
}

describe('Login', () => {
    it('exibe um erro quando o email está vazio', () => {
        const wrapper = factory({
            form: {
                email: ''
            }
        })
        console.log(wrapper.find('.el-form-item__error').exists())
        expect(wrapper.find('.el-form-item__error').exists()).toBeTruthy()
    })

    it('exibe um erro quando o email é inválido', () => {
        const wrapper = factory({
            form: {
                email: 'example@remail.com'
            }
        })

        expect(wrapper.find('.el-form-item__error').exists()).toBeFalsy()
    })
})
