import { createClient } from '@supabase/supabase-js';
class SupaService{
    supabase 
    constructor() {
        const host = import.meta.env.VITE_API_URL
        const pass = import.meta.env.VITE_API_PASS
        if (!this.supabase) {
            this.supabase =createClient(host,pass)
        }
    }
}

const service = new SupaService()

export default  service.supabase
