import { Router } from 'express';
import { clientRoutes } from '../controllers/Client/routes';
import { userRoute } from '../controllers/User/routes';

const route = Router();

route.use('/usuario', userRoute);
route.use('/clients', clientRoutes);

export {route}