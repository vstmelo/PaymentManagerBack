import Get from './get';
import Create from './create';
import Edit from './edit'
import { Router } from 'express';

const getClient = new Get();
const createClient = new Create();
const editClient = new Edit();

const clientRoutes = Router();

clientRoutes.get('/', getClient.getClient);
clientRoutes.post('/create', createClient.createClient);
clientRoutes.get('edit', editClient.editClient);

export { clientRoutes };