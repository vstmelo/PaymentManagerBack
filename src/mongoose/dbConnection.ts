import mongoose from 'mongoose';
import 'dotenv/config';

function dbConnection() {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@payment.ge8sah8.mongodb.net/?retryWrites=true&w=majority`,
  );
  const db = mongoose.connection;
  db.on('error', error => console.log(error));
  db.once('open', () => console.log('connected to database'));
}

export default dbConnection;


