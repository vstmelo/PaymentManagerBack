import { BadRequest } from '@shared/errors/BadRequest';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindUseCase from './find-useCase';

class FindController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;
    const findUseCase = container.resolve(FindUseCase);
    const client = await findUseCase.execute(email);
    if (!client) {
      throw new BadRequest('Client not found');
    }
    return res.status(200).json(client);
  }
}
export default FindController;