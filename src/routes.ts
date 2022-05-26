import { Router } from "express";
import { UserController } from './controllers/UserController';
import { ClientController } from './controllers/ClientController';

const routes = Router();
const userController = new UserController();
const clientController = new ClientController();

routes.get('/user/:id', userController.getUser);
routes.get('/client/:username', clientController.getClient);

routes.post('/client/create', clientController.createClient);

export  {routes};