import Router from 'express';
//import controlador
import * as ProductCtr from '../controllers/product.controller.js';

const router = Router();

router.get('/', ProductCtr.getProducts);
router.get('/:id', ProductCtr.getProductById);
router.post('/', ProductCtr.createProduct);
router.put('/:id', ProductCtr.updateProduct);
router.delete('/:id', ProductCtr.deleteProduct);

export default router;
