import Router from 'express';
//Import del controlador de Categoria
import * as CategoryCtr from '../controllers/category.controller.js';

const router = Router();

//Rutas de Operaciones de Categorias

router.get('/', CategoryCtr.getCategorys);
router.get('/:id', CategoryCtr.getCategoryById);
router.post('/', CategoryCtr.createCategory);
router.put('/:id', CategoryCtr.updateCategory);
router.delete('/:id', CategoryCtr.deleteCategory);

export default router;
