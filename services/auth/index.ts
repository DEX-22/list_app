import supa from "../supa";
import { type ICredentials,type IRegister } from "../../interfaces/auth"; 
class AuthService{
    supabase
    constructor(){
           
      this.supabase = supa

    }
    login(credentials:ICredentials){
      return new Promise(async (res,rej)=>{
  
      let { data, error } = await this.supabase.auth.signInWithPassword({ 
          email: credentials.email,
          password: credentials.password
        })

        if(error) rej(error)
       

        res(data)
        
     })
    }

    register(registerInformation:IRegister){
       return new Promise(async (res,rej)=>{

          try{   await this.registerInTable(registerInformation)} 
          catch(e){ rej(e) }
       
        let { data, error } = await this.supabase.auth.signUp({
            username: registerInformation.username,
            email: registerInformation.email,
            password: registerInformation.password
          })

          if(error) rej()
         

          res(data)
          
       })
    }
    registerInTable(registerInformation:IRegister){
        return new Promise(async (res,rej)=>{

            const { data, error } = await this.supabase
              .from('users')
                    .insert(registerInformation) 
    
              if(error) rej(error)
    
              res(data)
    
           })
    }
}

export default AuthService 