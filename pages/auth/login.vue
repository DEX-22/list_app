<template >

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input v-model="credentials.email" type="email" placeholder="email" class="input input-bordered" required /> 
  
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input v-model="credentials.password" type="password" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button @click.prevent="sendInformation" class="btn btn-primary">Login</button>
        </div>
        <div class="form-control  mt-2">
          <NuxtLink to="/auth/register" class="btn btn-outline btn-primary btn-full"> Register </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</div>

</template>
<script lang="ts" setup>   
import Swal from 'sweetalert2/dist/sweetalert2.js' 
import LoginSchema from '../../schemas/auth/login';
import {type ICredentials} from '../../interfaces/auth'
import AuthService from "../../services/auth/index"
import { userStore } from '../../store/auth/user.store';

definePageMeta({
  layout: 'login'
})
useSeoMeta({
  title:"Log in", 
})  
const UserStore = userStore()

const credentials: Ref<ICredentials> = ref({
  email:"",
  password:""
}) 
async function validate():Promise<boolean>{
  let isValid = false
    try{
    const validate = await LoginSchema.validate(credentials.value)
    isValid = typeof validate != 'boolean'
    }catch(e){
      if(e.message.search('email must be a valid email') != -1){
        
        Swal.fire({ 
          icon:"error",
          title: "Invalid email",
          text:"The email is incorrect, please fix it"
        });
      }else if(e.message.search('required field') != -1){
        Swal.fire({ 
          icon:"error",
          title: "Field empty",
          text:"Fill all fields to continue"
        });
      }else if(e.message.search('must be at least') != -1){
        const msgArr = e.message.split(" ")
        const field = msgArr.find((word,index)=>index == msgArr.findIndex(e=>e=='must')-1)
        const min = msgArr.find((word,index)=>index == msgArr.findIndex(e=>e=='least')+1)
        Swal.fire({ 
          icon:"error",
          title: "Text very short",
          text:`The ${field} field required ${min} characters`
        });
      }else{
        throw e
      }
    }
  return isValid
}
 
async function sendInformation( ){
    const isValid = await validate()
    if(!isValid) return
    try{
        const info = await UserStore.login(credentials.value) 
        await Swal.fire({
          icon:"success",
          title: "Email checked",
          text:JSON.stringify(info)
        }) 
    }catch(e){
      if(e.message.search('Email not confirmed') != -1){
          Swal.fire({
            icon:"error",
            title: "Email unconfirmed",
            text:"Check your inbox and confirm email to login"
          })
      }
    } 
    
   
}




</script>