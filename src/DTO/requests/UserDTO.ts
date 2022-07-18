export default interface ICreateUser {
    id? : number,
    email: string,
    phone?: string,
    password: string,
    username?: string,
}