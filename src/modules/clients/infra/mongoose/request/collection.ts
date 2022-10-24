import { url } from '@shared/infra/http/dbConnection';
import { MongoClient } from 'mongodb';

function getCollection(colectionName: string) {

  return new MongoClient(url).db('payment').collection(colectionName);

}

export default getCollection;
