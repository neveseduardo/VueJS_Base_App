import { shallowMount } from '@vue/test-utils'
import Hello from '@/components/Hello'

const factory = (values = {}) => {
    return shallowMount(Hello, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('Foo', () => {
    it('exibe uma mensagem de boas vindas', () => {
        const wrapper = factory()

        expect(wrapper.find('.message').text()).toEqual("Bem-vindo ao livro de receitas do Vue.js")
    })

    it('exibe um erro quando o nome de usuário tem menos de 7 caracteres', () => {
        const wrapper = factory({ username: '' })

        expect(wrapper.find('.error').exists()).toBeTruthy()
    })

    it('exibe um erro quando o nome de usuário é espaço em branco', () => {
        const wrapper = factory({ username: ' '.repeat(7) })

        expect(wrapper.find('.error').exists()).toBeTruthy()
    })

    it('não exibe um erro quando o nome de usuário tem 7 caracteres ou mais', () => {
        const wrapper = factory({ username: '1234567' })

        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})
