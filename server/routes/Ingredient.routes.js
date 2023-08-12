import { Router } from "express";
import * as IngredientCtr from "../controllers/ingredient.controller.js";

const router = Router();

router.get('/', IngredientCtr.getIngredients);

router.get('/:id', IngredientCtr.getIngredientsById);

router.post('/', IngredientCtr.createIngredient);

router.put('/:id', IngredientCtr.updateIngredient);

router.delete('/:id', IngredientCtr.deleteIngredient);




export default router;
