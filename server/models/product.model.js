import { model, Schema } from 'mongoose';

const productSchena = new Schema(
  {
    nombre: { type: String, require: true, trim: true },
    precio: { type: Number, require: true },

    // Relacion con la Schema de Category
    categorias: [
      {
        ref: 'Category',
        type: Schema.Types.ObjectId,
      },
    ],
    stock: { type: Number, default: 0 },
  },
  { versionKey: false, timestamps: true }
);

export default model('Product', productSchena);
