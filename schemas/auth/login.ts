import {object,string,number,date} from 'yup'

const LoginSchema = object({ 
    email: string().email(),
    password: string().min(6)
})

export default LoginSchema