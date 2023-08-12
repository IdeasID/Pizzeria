import { model, Schema } from 'mongoose';

const drinkSchena = new Schema(
  {
    name: { type: String, require: true, trim: true },
    price: { type: Number, require: true },
    description: { type: String, trim: true },
    stock: { type: Number, default: 0, require: true },
    size: { type: String, require: true},
    category: { type: String, require: true, trim: true},
  },
  { versionKey: false, timestamps: true }
);

export default model('Drink', drinkSchena);
