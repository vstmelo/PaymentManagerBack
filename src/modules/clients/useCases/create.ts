import { Request, Response } from 'express';
import ClientRepository from '../repositories/client-repository';
import CreateService from '../services/create';
import ClientSchema from '../../../mongoose/schemas/Client';
const clientRepository = new ClientRepository();

class CreateController {
  async handle(req: Request, res: Response) {
    const { username, email } = req.body;
    const teste = await ClientSchema.create({ username, email })
    console.log(teste)
    // const createService = new CreateService(clientRepository);

    // createService.execute({ username: username, email: email });
  //  await  clientSchema.create({ username: username, email: email });
    return res.status(201).json({ message: 'Client created' });
  }
}
export default CreateController;