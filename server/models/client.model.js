import { model, Schema } from 'mongoose';

// Se activa la funcion "Trim" para que elimine los espacios en blanco del campo al comienzo y final
const clientSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    email: { type: String, unique: true, require: true},
    phone: { type: Number, require: true }
  },
  { versionKey: false, timestamps: true }
);

export default model('Client', clientSchema);
