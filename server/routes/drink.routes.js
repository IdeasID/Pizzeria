import Router from 'express';
//import controlador
import * as DrinkCtr from '../controllers/drink.controller.js';

const router = Router();

router.get('/', DrinkCtr.getDrinks);
router.get('/:id', DrinkCtr.getDrinkById);
router.post('/', DrinkCtr.createDrink);
router.put('/:id', DrinkCtr.updateDrink);
router.delete('/:id', DrinkCtr.deleteDrink);

export default router;
