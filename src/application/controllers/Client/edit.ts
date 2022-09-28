import { Request, Response } from 'express';
import { ClientService } from '../../../domain/user/dtos/services/ClientService';

export default class Edit {
    async editClient(req: Request, res: Response): Promise<Response> {
        const clientService = new ClientService();

        const { id } = req.params;

        const { email, username, phone, cep } = req.body;

        const client = await clientService.editClient({
            id, email, username, phone, cep
        });

        return res.json(client);
    }
}