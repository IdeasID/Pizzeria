import app from "./app.js";
import { connectDb } from "./db.js";
import { env } from "./config.js";

// Inicializacion de la conection a la DB
const urlDB = env.URLDB;
const db = env.DB;
connectDb(urlDB, db);

// Method para iniciar la escucha de express RUN
app.listen(3000);
console.log("Server is Runing");
