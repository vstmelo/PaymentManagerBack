import Client from '../mongoose/schemas/Client';

class CreateService {
  async execute({ username, email }: any) {
    const client = await Client.create({ username: username, email: email });
    return client;
  }
}
export default CreateService;
