import 'reflect-metadata';
import clientRouter from '@modules/clients/infra/http/routes';
import '@shared/container';
import express from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';
import dbConnection from './dbConnection';
import 'express-async-errors';

dbConnection();

const app = express()

app.use(cors())
app.use(express.json())
app.use(clientRouter)
app.use(ErrorHandler);

export default app;
