import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Category', categorySchema);
