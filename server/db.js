import mongoose from 'mongoose';

/* funcion para conectarce a mongodb 
       URL = del servidor 
       DB=nombre de la base de datos
*/
export const connectDb = async (url, db) => {
  try {
    await mongoose.connect(`mongodb://${url}/${db}`);
  } catch (error) {
    console.log(error.message);
  }
};
