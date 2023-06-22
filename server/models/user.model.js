import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    phone: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('User', userSchema);
