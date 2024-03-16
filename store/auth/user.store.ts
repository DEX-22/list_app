import AuthService from '../../services/auth/index'
import {type ICredentials} from '../../interfaces/auth'
import { defineStore } from 'pinia';



const state = { 
    isLogged: false,
    session:{},
    user:{}
} 

export const actions = {
    async login(credentials: ICredentials){
        if(Object.values(credentials).includes('')) throw new Error("Debes enviar credenciales validas")
        const auth = new AuthService()
        let data = null

        try{
            data = await auth.login(credentials)
            const {user,...tokenInfo} = data.session
            this.session = tokenInfo
            this.user = user 
            this.isLogged = true
        }catch(error){
                console.dir(error)
                throw new Error(error?.message ?? "error to connect api")
        }  

        localStorage.setItem('token',`${this.session.token_type} ${this.session.access_token}`)



        return `Welcome ${this.user.email}`

    },
    setAuthData(){
        const [name,data] =  Object.entries(localStorage).find(el=>el[0].search('auth-token') != -1 ) 
        const {user,...session} = JSON.parse(data)
        this.session = session
        this.user = user

        this.isLogged = true
    }
}

const getters = {}

export const userStore = defineStore('auth.user.store', {
    state:()=>state,
    actions,
    getters
} );
