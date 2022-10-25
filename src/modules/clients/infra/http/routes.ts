import express, { Request, Response } from 'express';
import ClientRepository from '@modules/clients/infra/repositories/client-repository';
import ListController from '@modules/clients/useCases/list/list-controller';

import CreateController from '@modules/clients/useCases/create/create-controller';
import FindController from '@modules/clients/useCases/find-by-email/find-controller';

const clientRouter = express.Router();

const createController = new CreateController();
const listController = new ListController();
const findController = new FindController();

clientRouter.post('/', createController.handle);

clientRouter.get('/', listController.handle);

clientRouter.get('/:email', findController.handle);

export default clientRouter;  