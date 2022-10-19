import CreateController from '@modules/user/useCases/create';
import express from 'express';
import UserRepository from '../repositories';

const userRouter = express.Router();
const userRepository = new UserRepository();
const createController = new CreateController();

userRouter.post('/', createController.handle);

export default userRouter;