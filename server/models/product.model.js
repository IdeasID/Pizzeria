import { model, Schema } from 'mongoose';

const productSchena = new Schema(
  {
    nombre: { type: String, require: true, trim: true },
    precio: { type: Number, require: true },
    description: { type: String },
    img: { type: String, default: '' },
    inCart: { type: Boolean, default: false },
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
