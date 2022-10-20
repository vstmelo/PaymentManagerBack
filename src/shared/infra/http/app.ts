import 'reflect-metadata';
import clientRouter from '@modules/clients/infra/http/routes';
import '@shared/container/client';
import express from 'express';
import cors from 'cors';
import { ErrorHandler } from './middleware/errorHandler';
import 'express-async-errors';
import userRouter from '@modules/user/infra/http/routes';
import { main } from './dbConnection';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/',userRouter)
app.use(ErrorHandler);
app.use('/client',clientRouter);
main()

export default app;
