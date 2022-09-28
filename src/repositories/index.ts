import { AppDataSource } from "../connection";
import { Client } from "../infra/typeorm/model/Client";
import {User} from '../infra/typeorm/model/User';


export const UserRepository = AppDataSource.getRepository(User);

export const ClientRepository = AppDataSource.getRepository(Client);
