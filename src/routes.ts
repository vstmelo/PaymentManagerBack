import { Router } from "express";
import { UserController } from './controllers/UserController';
import { ClientController } from './controllers/ClientController';

const routes = Router();
const userController = new UserController();
const clientController = new ClientController();

//users
routes.get('/user/:id', userController.getUser);
routes.post('/user/create', userController.createUser);
routes.post('/login', userController.login);

//clients
routes.get('/client/:username', clientController.getClient);
routes.post('/client/create', clientController.createClient);

export  {routes};