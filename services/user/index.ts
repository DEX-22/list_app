import supa from "../supa"

class UserService extends MainService{ 
    constructor() {
        super(supa,'users')
    }
    async getUsers(){
        return new Promise(async (response,reject)=>{
            const {data,error} = await super.supa.from(super.table)
            if(error)
                reject(error.message?? error)

            response(data)

        })

    }
}


export default new UserService()