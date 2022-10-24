import IUser from '@modules/user/infra/dto';

interface IUserRepository{
    create({email, password}: IUser): Promise<void>;
    
    findByEmail(email: string): Promise<IUser | null>;

}
export default IUserRepository;