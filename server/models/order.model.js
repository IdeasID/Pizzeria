import { model, Schema } from 'mongoose';

const orderSchema = new Schema(
  {
    // Relacion con la Schema de Productos - Array porque pueden ser varios productos en un mismo pedido
    products: [
      {
        ref: 'Product',
        type: Schema.Types.ObjectId,
        require: true
      },
    ],
    // Relacion con la Schema de Usuarios
    client: {
        ref: 'Client',
        type: Schema.Types.ObjectId,
        require: true,
        unique: true
    }
  },
  { versionKey: false, timestamps: true }
);

export default model('Order', orderSchema);