import express from 'express';

import clientRouter from '../../modules/clients/infra/http/routes';
import cors from 'cors'
import { ErrorHandler } from './../middleware/errorHandler';
import dbConnection from '../../mongoose/dbConnection';

dbConnection();

const app = express()

app.use(cors())
app.use(express.json())
app.use(clientRouter)
app.use(ErrorHandler);


export default app;
