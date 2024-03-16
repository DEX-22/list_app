export default defineNuxtRouteMiddleware((from,to)=>{
      if (from.path === '/') {
        return navigateTo('/home')
      } 
})