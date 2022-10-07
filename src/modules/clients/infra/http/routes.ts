import express, { Request, Response } from 'express';
import ClientRepository from '../../../../modules/clients/repositories/client-repository';
import { createController, listController } from '../../../../modules/clients/useCases';


const clientRouter = express.Router();
const clientRepository = new ClientRepository();

clientRouter.post('/', (req, res) => { return createController.handle(req, res) });

clientRouter.get('/', (req, res) => { return listController.handle(req, res) });

clientRouter.get('/:email', async (request: Request, response: Response) => {
    const { email } = request.params;
    console.log(email)
    const client = clientRepository.findByEmail(email);
    return response.status(200).json(client);
});

export default clientRouter;  