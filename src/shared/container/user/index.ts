import UserRepository from '@modules/user/infra/repositories/user-repository';
import IUserRepository from '@modules/user/repositories/IUser-repository';
import {container} from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);