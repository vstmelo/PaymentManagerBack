import express, { Request, Response } from 'express';
import { BadRequest } from '../../../../shared/errors/BadRequest';
import ClientRepository from '../../../../modules/clients/repositories/client-repository';
import ClientController from '../../useCases/create';

const clientRouter = express.Router();
const clientRepository = new ClientRepository();
const clientController = new ClientController();

clientRouter.post('/',clientController.handle );

clientRouter.get('/', async (request: Request, response: Response) => {
    const all = clientRepository.list();
    if(!all){
        throw new BadRequest('Error to list clients');
    }
    return response.status(200).json(all);
});

clientRouter.get('/:email', async (request: Request, response: Response) => {
    const { email } = request.params;
    console.log(email)
    const client = clientRepository.findByEmail(email);
    return response.status(200).json(client);
});

export default clientRouter;  