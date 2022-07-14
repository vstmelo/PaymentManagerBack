import { Request, Response } from "express";

import IUserDTO from '../DTO/requests/UserDTO'

import UserService from '../services/UserService';

const userService = new UserService();
class UserController {

    async login(req: Request, res: Response): Promise<Response> {


        const { email, password }: IUserDTO = req.body;

        return res.json('Logged')
    };

    async getUser(req: Request, res: Response): Promise<Response> {


        const IUserDTO = req.params;

        const user = await userService.getUser(IUserDTO.id);

        return res.json(user);
    };

    async createUser(req: Request, res: Response): Promise<Response> {

        const { email, username, password, phone } = req.body;

        const message: string = await userService.createuser({ email, username, password, phone });

        return res.json({
            message: message
        });
    };

    async editUser(req: Request, res: Response): Promise<Response> {
        const { email, username, password, phone } = req.body;


        const id = req.params;

        const editedUser = await userService.editUser({
            email, username, password, phone
        });

        return res.json(editedUser);
    }



}
export { UserController };