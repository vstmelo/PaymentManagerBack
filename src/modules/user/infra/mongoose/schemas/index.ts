import mongoose from 'mongoose';
import UserDTO from '@modules/user/infra/dto';

const schema = new mongoose.Schema<UserDTO>({
  name: {
    type: String,
    lowercase: true,
    required: false,
    maxLength: 16,
  },
  email: { type: String, lowercase: true, required: true },
  phone: { type: String, required: false },
  password: { type: String, reqired: true },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {},
});

const UserSchema = mongoose.model('Users', schema);

export default UserSchema;
