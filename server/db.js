import mongoose from "mongoose";

/* funcion para conectarce a mongodb 
       URL = del servidor 
       DB=nombre de la base de datos
*/
export const connectDb = async (url, db) => {
  console.log(db);
  if (!isNaN(db)) {
    console.log("i am in");
    try {
      await mongoose.connect(`mongodb://${url}/${db}`);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await mongoose.connect(url);
    } catch (error) {
      console.log(error);
    }
  }
};
