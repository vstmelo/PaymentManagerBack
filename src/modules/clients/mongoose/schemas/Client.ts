import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
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
  },
  cep: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {},
});
export default mongoose.model('Client', clientSchema);
