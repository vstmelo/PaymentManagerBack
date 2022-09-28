import { Request, Response } from "express";
import { ClientService } from "../../../domain/user/dtos/services/ClientService";

export default class Create{
    async createClient(req: Request, res: Response): Promise<Response> {

        const clientService = new ClientService();

        const { email, username, phone, cep } = req.body;

        const newClient: string = await clientService.createClient({ email, username, phone, cep });

        return res.json({
            newClient: newClient
        })
    };
}