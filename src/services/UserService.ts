import { User } from "../model/User";
import { UserRepository } from "../repositories/UserRepository";

interface ICreateUser{
    email: string, 
    phone:string,
    password: string,
    username: string,
    cpf : string,
}

class UserService{
    async login ({email, password} : {email:string, password: string}){
        const user = await UserRepository.findOneByOrFail({email});
        const error : Error = new Error("Wrong password or email");
        if (!user){
            throw error;
        }
    };
    
    async getUser(id:string){
        const user = await UserRepository.findOneBy({id: parseInt(id)})
            if (!user) {
                throw new Error("Usuário não encontrado.")
            }
        
    };
    async createuser({email, password, username, cpf, phone } : ICreateUser): Promise<string>{
        const existUser = await UserRepository.findOneBy({email});

        if(existUser){
            throw new Error('email already used.')
        }
        const user = UserRepository.create({
            username,
            email,
            password,
             cpf,
             phone
    });
    await UserRepository.save(user);
    
    return 'User created successfully';
    }       
}
export {UserService};