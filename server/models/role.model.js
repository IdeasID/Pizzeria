import { model, Schema } from 'mongoose';
export const ROLES = ['user', 'admin'];
const roleSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Role', roleSchema);
