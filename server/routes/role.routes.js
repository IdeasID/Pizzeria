import Router from 'express';
const router = Router();
//Import Controller
import * as RoleCtr from '../controllers/role.controller.js';
//Import Middlewares
import { authRequired } from '../middlewares/validateToken.js';

router.get('/', RoleCtr.getRoles);
router.get('/:id', RoleCtr.getRolesById);
router.post('/', authRequired, RoleCtr.createRole);
router.put('/:id', authRequired, RoleCtr.updateRole);
router.delete('/:id', authRequired, RoleCtr.deleteRole);

export default router;
