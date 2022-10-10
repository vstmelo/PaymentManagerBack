import express, { Request, Response } from 'express';
import ClientRepository from '../../../../modules/clients/repositories/client-repository';
import ListController from '../../../../modules/clients/useCases/list';

import CreateController from '../../../../modules/clients/useCases/create';

const clientRouter = express.Router();
const clientRepository = new ClientRepository();

const createController = new CreateController();
const listController = new ListController();

clientRouter.post('/', createController.handle);

clientRouter.get('/', listController.handle);

clientRouter.get('/:email', async (request: Request, response: Response) => {
    const { email } = request.params;
    console.log(email)
    const client = clientRepository.findByEmail(email);
    return response.status(200).json(client);
});

export default clientRouter;  