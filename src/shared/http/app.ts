import express from 'express';
import mongoose from 'mongoose'
import contactRouter from '../../modules/clients/infra/http/routes';

const app = express()
app.use(express.json())
app.use(contactRouter)

mongoose.connect('mongodb://localhost:27017/payment', () => {
  console.log('connected to database')
})

export default app;
