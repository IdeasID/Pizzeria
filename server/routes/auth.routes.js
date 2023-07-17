import { Router } from 'express';
import * as AuthCtr from '../controllers/auth.controller.js';
//Imports Middlewares
import { validateSchema } from '../middlewares/validate.middleware.js';
import { loginSchema, registerSchema } from '../schemas/authSchema.js';

const router = Router();

router.post('/register', validateSchema(registerSchema), AuthCtr.register);
router.post('/login', validateSchema(loginSchema), AuthCtr.login);
router.post('/logout', AuthCtr.logout);

export default router;
