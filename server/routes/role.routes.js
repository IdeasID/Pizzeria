import Router from 'express';
import * as RoleCtr from '../controllers/role.controller.js';

const router = Router();

router.get('/', RoleCtr.getRoles);
router.get('/:id', RoleCtr.getRolesById);
router.post('/', RoleCtr.createRole);
router.put('/:id', RoleCtr.updateRole);
router.delete('/:id', RoleCtr.deleteRole);

export default router;
