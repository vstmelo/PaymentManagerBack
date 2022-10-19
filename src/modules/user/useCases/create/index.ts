import { BadRequest } from '@shared/errors/BadRequest';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserUseCase from './create-useCase';

class CreateController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const userUseCase = container.resolve(UserUseCase);

    const user = await userUseCase.execute({ email, password });

    if (!user) {
      throw new BadRequest('Error to create user');
    }

    return res.status(201).json({ message: 'User created' });
  }
}

export default CreateController;
