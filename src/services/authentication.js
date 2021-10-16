import { methods } from '@/utils/methods'

const TokenKey = 'User-Token'

export const logged = async () => {
    const token = await JSON.parse(sessionStorage.getItem(TokenKey))
    return token !== null ? true : false
}
export const login = async user => {
    try {
        await sessionStorage.setItem(TokenKey, JSON.stringify(user))
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
export const logout = () => {
    sessionStorage.removeItem(TokenKey)
}
