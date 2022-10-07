import { Request, Response } from 'express';
import { BadRequest } from '../../../../shared/errors/BadRequest';
import CreateUseCase from './create-useCase';

class CreateController {
  constructor(
    private createUseCase: CreateUseCase
  ) { }
  async handle(req: Request, res: Response) {
    const { username, email } = req.body;
    const teste = this.createUseCase.execute({ username, email });
    if (!teste) {
      throw new BadRequest('Error to create client');
    }
    return res.status(201).json({ message: 'Client created' });
  }
}
export default CreateController; 