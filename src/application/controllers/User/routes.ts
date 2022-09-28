import auth from '../../middleware/auth';
import { Router } from "express";
import Create from "./create";
import get from './get';
import login from './login';

const createuser = new Create();
const getuser = new get();
const loginuser = new login();

const userRoute = Router();
userRoute.post('/create', createuser.createUser);
userRoute.get('/getUser', auth, getuser.getUser);
userRoute.post('/login', loginuser.login);

export { userRoute };