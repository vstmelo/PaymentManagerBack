import { UserRepository } from "../repositories/repositories";
import IUserDTO from '../DTO/requests/UserDTO';

export default class UserService {
    async login({ email, password }: IUserDTO) {

        const user = await UserRepository.findOneByOrFail({ email });

        const error: Error = new Error("Wrong password or email");
        if (!user) {
            throw error;
        }
    };

    async getUser(id: string) {

        const user = await UserRepository.findOneBy({ id: parseInt(id) })

        if (!user) {
            throw new Error("User was not find")
        }

        return user;
    };

    async createuser({ email, password, username, phone }: IUserDTO): Promise<string> {

        const existUser = await UserRepository.findOneBy({ email });

        if (existUser) {
            throw new Error('Email already used.')
        }

        const user = UserRepository.create({
            username,
            email,
            password,
            phone
        });

        await UserRepository.save(user);

        return 'User created successfully';
    };

    async editUser({ id, email, password, username, phone }: IUserDTO): Promise<Object> {

        const user = await UserRepository.findOneBy({ id });

        if (!user) {
            throw new Error('User not found');
        };
        
        const userEdited = UserRepository.update({id}, {
            email,
            password,
            username,
            phone,

        });

        return userEdited;
    }
}