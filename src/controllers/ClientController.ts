import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';

export class ClientController {
    async createClient(req: Request, res: Response): Promise<Response> {

        const clientService = new ClientService();

        const { email, username, phone, cep } = req.body;

        const newClient: string = await clientService.createClient({ email, username, phone, cep });

        return res.json({
            newClient: newClient
        })
    };

    async getClient(req: Request, res: Response): Promise<Response> {
        
        const clientService = new ClientService();

        const { username } = req.params;

        const client = await clientService.getClient(username);

        return res.json(client);

    }
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