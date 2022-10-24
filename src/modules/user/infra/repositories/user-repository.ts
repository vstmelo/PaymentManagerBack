import IUserRepository from '@modules/user/repositories/IUser-repository';
import IUserDTO from '@modules/user/infra/dto';
import UserSchema from '../mongoose/schemas';

class UserRepository implements IUserRepository {
  private user: IUserDTO[] = [{email: '', password: ''}];
  constructor() {
    this.user = [];
  }
  create = async ({ email, password }: IUserDTO): Promise<void> => {
    const newUser = new UserSchema();
    Object.assign(newUser, { email, password });
    this.user.push(newUser);
  };
  findByEmail = async (email: string): Promise<IUserDTO | null> => {
    const user = this.user.find(user => user.email === email);
    if (!user) {
      return null;
    }
    return user;
  };
}
export default UserRepository;
