
export const getAuthToken = ()=>{
    const token = Object.keys(localStorage).find(e=>e.search('auth-token') != -1)

    return token
}


 