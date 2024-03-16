import  { type IThing } from "../../interfaces/thing"
import supa from "../supa"

class ThingsService{
    supa
    table
    constructor() {
        this.table = 'items'
        this.supa = supa
    }
    getThings(){
        return new Promise(async(response,reject)=>{
            const {data,error} =await this.supa.from(this.table).select('*')

            if(error)
                reject(error.message) 
            
            response(data)
        })
    }
    toggleStatusItem(item:IThing) {
        return new Promise(async (response,reject)=>{
            const {data,error} = await this.supa
                                    .from('items')
                                    .update({ checked: !item.checked })
                                    .eq('id', item.id);

                if(error) reject(error.message?? error)

                response(data)

        })
      }
}

export default new ThingsService()