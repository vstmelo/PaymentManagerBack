import Client from '../mongoose/schemas/Client';

class CreateService {
  async execute({ username, email }: any) {
    const client = await (await Client.create({ username: username, email: email })).save();
    
    return client;
  }
}
export default CreateService;
 