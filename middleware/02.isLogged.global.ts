import { userStore } from "../store/auth/user.store"
import {getAuthToken } from '../utils/localstorage'
export default defineNuxtRouteMiddleware((from,to)=>{

    const UserStore = userStore()
    const hasToken = getAuthToken()
    const path = {
        home:'/home',
        login:'/auth/login',
        register:'/auth/register'
    } 

    const loginValidate = to.path !== path.login && from.path !== path.login
  
    if(!hasToken && loginValidate){ 
        return navigateTo(path.login)
    }else{
        
        if(hasToken && !UserStore.isLogged) UserStore.setAuthData() 
        
        if(!UserStore.isLogged && to.path !== path.login) return navigateTo(path.login)
         
        if(UserStore.isLogged && to.path === path.login && from.path !== path.home ) return navigateTo(path.home)

       
    }
        
    
})
