import { Request, Response } from "express";
import UserService from "../../../domain/user/dtos/services/UserService";

const userService = new UserService();
export default class Login {

    async login(req: Request, res: Response): Promise<Response> {

        const { email, password } = req.body;

        const token = await userService.login({ email, password })

        return res.json(token);
    };
}