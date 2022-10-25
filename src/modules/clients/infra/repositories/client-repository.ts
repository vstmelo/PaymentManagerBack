import ClientDTO from '../dto';
import IClientRepository from '../../repositories/IClient-repositoy';
import ClientSchema from '../mongoose/schemas/Client';
import getCollection from '../mongoose/request/collection';

class ClientRepository implements IClientRepository {
  private static INSTANCE: ClientRepository;

  public static getInstance(): ClientRepository {
    if (!ClientRepository.INSTANCE) {
      ClientRepository.INSTANCE = new ClientRepository();
    }
    return ClientRepository.INSTANCE;
  }

  private repository = getCollection('clients');

  create = async ({ username, email }: ClientDTO): Promise<void> => {
    const newClient = new ClientSchema();

    Object.assign(newClient, { username, email });

    this.repository.insertOne(newClient);
  };

  list = async (): Promise<any> => {
    const all = this.repository.find({}).toArray();
    return all;
  };

  findByEmail = async (email: string): Promise<any | null> => {
    const client = this.repository.findOne({ email: email });

    if (!client) {
      return null;
    }

    return client;
  };
}

export default ClientRepository;
