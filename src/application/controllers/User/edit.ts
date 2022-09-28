import { Request, Response } from "express";


import UserService from '../../../domain/user/dtos/services/UserService';

const userService = new UserService();
export default class Edit {

    async editUser(req: Request, res: Response): Promise<Response> {
        const { email, username, password, phone } = req.body;


        const id = req.params;

        const editedUser = await userService.editUser({
            email, username, password, phone
        });

        return res.json(editedUser);
    }
}