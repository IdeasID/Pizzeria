import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    phone: { type: String, require: true },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Funciones para encryptar el password
userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, recivePassword) => {
  return await bcrypt.compare(password, recivePassword);
};

export default model('User', userSchema);
