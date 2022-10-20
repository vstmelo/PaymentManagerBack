import ClientDTO from '../dto';
import IClientRepository from '../../repositories/IClient-repositoy';
import ClientSchema from '../mongoose/schemas/Client';

class ClientRepository implements IClientRepository {
  private client: ClientDTO[] = [];

  constructor() {
    this.client = [];
  }

  create = async ({ username, email }: ClientDTO): Promise<void> => {
    const newClient = new ClientSchema();
    Object.assign(newClient, { username, email });
    this.client.push(newClient);
  };
  list = async (): Promise<ClientDTO[]> => {
    const all = this.client;
    return all;
  };

  findByEmail = async (email: string): Promise<ClientDTO | null> => {
    const client = this.client.find(client => client.email === email);

    if (!client) {
      return null;
    }

    return client;
  };
}

export default ClientRepository;
