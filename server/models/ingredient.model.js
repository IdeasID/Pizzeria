import { model, Schema } from "mongoose";

const ingredientSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    extraPrice: { type: Number, require: true },
    stock: { type: Number, default: 0, require: true },
    category: { type: String, require: true, trim: true },
  },
  { versionKey: false, timestamps: true }
);

export default model("Ingredient", ingredientSchema);
