import app from './app.js';
import { connectDb } from './db.js';

// Inicializacion de la conection a la DB
connectDb('127.0.0.1', 'dbproyect');

// Method para iniciar la escucha de express RUN
app.listen(3000, () => {
  console.log('Server is Runing');
});
