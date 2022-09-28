import 'dotenv/config';
import cors from 'cors';
import express from 'express'
import "../connection";
import { route } from './routes';
import { ErrorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: '5000mb' }));
app.use(route);
app.use(ErrorHandler);

app.listen(3333, () =>
  console.log('server running on port 3333'))
