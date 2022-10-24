import { Request, Response } from 'express';
import { BadRequest } from '@errors/BadRequest';
import ClientUseCase from './create-useCase';
import { container } from 'tsyringe';

class CreateController {

  async handle(req: Request, res: Response) {
    const { username, email } = req.body;

    const createUseCase = container.resolve(ClientUseCase);

    const client = await createUseCase.execute({ username, email });
    
    if (!client) {
      throw new BadRequest('Error to create client');
    }
    return res.status(201).json({ message: 'Client created' });
  }
}
export default CreateController; 