import 'dotenv/config';
import { MongoClient } from 'mongodb';

// Connection URL
export const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@payment.og4gzfq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

export async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());