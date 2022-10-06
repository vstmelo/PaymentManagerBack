import { BadRequest } from '../../../shared/errors/BadRequest';
import ClientDTO from '../infra/entities';
import IClientRepository from '../repositories/IClient-repositoy';

class CreateService {

  constructor(private clientRepository: IClientRepository) { }

  async execute({ username, email }: ClientDTO) {


    const clientExists = this.clientRepository.findByEmail(email);

    if (clientExists) {
      throw new BadRequest("Client already exists!");
    }

    this.clientRepository.create({ username: username, email: email });

  } 
}
export default CreateService;
