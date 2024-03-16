<template>
     <section class="grid place-items-center h-screen"> 
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input v-model="data.username" type="email" placeholder="username" class="input input-bordered" required /> 
  
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input v-model="data.email" type="email" placeholder="email" class="input input-bordered" required /> 
  
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input v-model="data.password" type="password" placeholder="password" class="input input-bordered" />
           
        </div>
        <div class="form-control mt-6">
          <button @click.prevent="sendInformation" class="btn btn-primary">Register</button>
        </div>
        <div class="w-full flex justify-end mt-1">

          <NuxtLink to="/auth/login" class="link"> Return to login </NuxtLink>
        </div> 
      </form>
    </div>
     </section>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import {  type IRegister } from '../../interfaces/auth';
import AuthService from '../../services/auth'
import RegisterSchema from '../../schemas/auth/register';
import {useForm} from 'vee-validate' 
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

const {meta,defineField} = useForm()
  

useSeoMeta({
  title:"Register"
  
})

const data = ref({
  username:"",
  email:"",
  password:""
})
 
async function validate():Promise<boolean>{
let isValid = false
  try{
  isValid = await RegisterSchema.validate(data.value)
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

    const info = await AuthService.register(data.value)
 
}

</script>