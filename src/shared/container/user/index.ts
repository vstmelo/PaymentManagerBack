import UserRepository from '@modules/user/infra/repositories';
import IUserRepository from '@modules/user/repositories/IUser-repository';
import {container} from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);