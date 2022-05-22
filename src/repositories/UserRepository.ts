import { AppDataSource } from "../connection";
import { User } from "../model/User";
export const UserRepository = AppDataSource.getRepository(User);