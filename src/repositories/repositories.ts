import { AppDataSource } from "../connection";
import { Client } from "../model/Client";
import {User} from '../model/User';


export const UserRepository = AppDataSource.getRepository(User);

export const ClientRepository = AppDataSource.getRepository(Client);
