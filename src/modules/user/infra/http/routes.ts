import CreateController from '@modules/user/useCases/create';
import express from 'express';
import UserRepository from '../repositories/user-repository';

const userRouter = express.Router();
const createController = new CreateController();

userRouter.post('/', createController.handle);

export default userRouter;