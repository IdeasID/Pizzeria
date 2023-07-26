import Router from "express";
//importando el controlador Whatsapp
import * as whatsapp from "../controllers/whatsapp.controller.js";

const router = Router();

//Rutas

router.post("/1", whatsapp.sentOrder);
router.post("/2",whatsapp.sentOrder2);

export default router;
