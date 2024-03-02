import {object,string,number,date} from 'yup'

const RegisterSchema = object({
    username: string().min(3),
    email: string().email(),
    password: string().min(6)
})

export default RegisterSchema