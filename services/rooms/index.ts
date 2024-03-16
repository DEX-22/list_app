import supa from "../supa"

class RoomService{
    supa
    table
    constructor() {
        this.table = 'events'
        this.supa = supa
    }
    getRooms(){
        return new Promise(async(response,reject)=>{
            const {data,error} =await this.supa.from(this.table).select('*')

            if(error)
                reject(error.message) 
            
            response(data)
        })
    }
}

export default new RoomService()