import { Request, Response } from "express";
import UserService from "../../../domain/user/dtos/services/UserService";

const userService = new UserService();
export default class Create{
    
    async createUser(req: Request, res: Response): Promise<Response> {

        const { email, username, password, phone } = req.body;

        const novouser = await userService.createuser({ ...req.body });

        return res.json(novouser);
    };
}