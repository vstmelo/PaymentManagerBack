import { url } from '@shared/infra/http/dbConnection';
import ClientSchema from '../schemas/Client';
import { MongoClient} from 'mongodb';

class CreateClientQuery {
  async handle({ username, email }: any) {
    const client = new MongoClient(url);
    const dbName = 'payment';
    const db = client.db(dbName);
    const collection = db.collection('client');
    const result = await collection.insertOne({
      username: username,
      email: email,
    });
  }
}
export default CreateClientQuery;
