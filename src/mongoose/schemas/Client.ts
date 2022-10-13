import ClientDTO from '@modules/clients/infra/entities';
import mongoose from 'mongoose';


const schema = new mongoose.Schema<ClientDTO>({
  username: {
    type: String,
    lowercase: true,
    required: true,
    maxLength: 16,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  cep: {
    type: String,
    required: false,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {},
});

const ClientSchame = mongoose.model('Clients', schema);
export default ClientSchame;