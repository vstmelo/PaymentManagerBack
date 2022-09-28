
import { UserRepository } from "../../../../repositories";
import IUserDTO from '../requests/UserDTO';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import secret from '../../../../secret/';

export default class UserService {
    private saltRounds: number = 10;

    async login({ email, password }: IUserDTO) {
        
        const user = await UserRepository.findOneByOrFail({ email });

        
        const error: Error = new Error("Wrong password or email");


        const validPass: boolean = bcrypt.compareSync(password, user.password);

        if (!user || !validPass ) {
            throw error; 
        };
 
         const token = jwt.sign({
            id: user.id,
            name: user.username,
 
        }, secret, {
            expiresIn: "3d"
        });

        return token;
    };

    async getUser(id: string): Promise<Object> {
        const user = await UserRepository
            .createQueryBuilder("user")
            .where("user.id = :id", { id: parseInt(id) })
            .getOneOrFail()

        if (!user) {
            throw new Error("User was not find")
        }

        return user;
    };

    async createuser({ email, password, username, phone }: IUserDTO): Promise<string> {

        const existUser = await UserRepository.findOneBy({ email });
        const hashPasswd: string = bcrypt.hashSync(password, this.saltRounds);
       
        if (existUser) {
            throw new Error('Email already used.')
        }

        const user = UserRepository.create({
            username,
            email,
            password: hashPasswd,
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

        const userEdited = UserRepository.update({ id }, {
            email,
            password,
            username,
            phone,
 
        });

        return userEdited;
    }
}