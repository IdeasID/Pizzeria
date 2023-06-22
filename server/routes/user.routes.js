import Router from 'express';
//importando el controlador USER
import * as UserCtr from '../controllers/user.controller.js';

const router = Router();

//Rutas

router.get('/', UserCtr.getAllUsers);
router.post('/', UserCtr.createUser);
router.get('/:id', UserCtr.getUserById);
router.put('/:id', UserCtr.updateUser);
router.delete('/:id', UserCtr.deleteUser);

export default router;
