import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import UserDTO from '../../infra/dto';
import IUserRepository from '../../repositories/IUser-repository';

@injectable()
class UserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: UserDTO): Promise<string> {
    const alreadyExist = await this.userRepository.findByEmail(email);
    if (alreadyExist) {
      throw new AppError('User already exists!', 400);
    }
    await this.userRepository.create({ email: email, password: password });
    return 'User created';
  }
}
export default UserUseCase;
