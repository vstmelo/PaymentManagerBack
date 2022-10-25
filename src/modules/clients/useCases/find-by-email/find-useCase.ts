import IClientRepository from '@modules/clients/repositories/IClient-repositoy';
import { inject, injectable } from 'tsyringe';
import IClientDTO from '@modules/clients/infra/dto';
@injectable()
class FindUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}
  async execute(email: string): Promise<IClientDTO   | null> {
    const client = await this.clientRepository.findByEmail(email);
    if(!client) {
        return null;
    }
    return client;
  }
}
export default FindUseCase;