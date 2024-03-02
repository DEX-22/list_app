export interface ICredentials{
    email: string,
    password: string
}

export interface IRegister extends ICredentials{
    username:string
}