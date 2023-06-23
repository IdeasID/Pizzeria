import { Router } from 'express';
import * as AuthCtr from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', AuthCtr.register);
router.post('/login', AuthCtr.login);
router.post('/logout', AuthCtr.logout);

export default router;
