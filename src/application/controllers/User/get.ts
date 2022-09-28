import { Request, Response } from "express";
import UserService from "../../../domain/user/dtos/services/UserService";

const userService = new UserService();

export default class Get{
    
    async getUser(req: Request, res: Response): Promise<Response> {


        const IUserDTO = req.params;

        const user = await userService.getUser(IUserDTO.id);

        return res.json(user);
    };

}