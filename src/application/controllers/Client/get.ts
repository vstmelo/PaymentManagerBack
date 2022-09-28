import { Request, Response } from "express";
import { ClientService } from "../../../domain/user/dtos/services/ClientService";

export default class Get {
    async getClient(req: Request, res: Response): Promise<Response> {

        const clientService = new ClientService();

        const { username } = req.params;

        const client = await clientService.getClient(username);

        return res.json(client);

    }
}