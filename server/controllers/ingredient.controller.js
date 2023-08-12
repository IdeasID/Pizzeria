import Ingredient from "../models/ingredient.model.js";

// Method GET ALL ROLES
export const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    if (!ingredients)
      return res.status(404).json({ msg: "Ingredient not Found" });
    return res.status(200).json(ingredients);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method POST CREATE ROLES
export const createIngredient = async (req, res) => {
  try {
    const { name, extraPrice, stock, category } = req.body;
    const newIngredient = new Ingredient({ name, extraPrice, stock, category });
    const saveIngredient = await newIngredient.save();
    return res.status(200).json(saveIngredient);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method GET ONE ROLE
export const getIngredientsById = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findById(id);
    if (!ingredient)
      return res.status(404).json({ msg: "Ingredient not Found" });
    return res.status(200).json(ingredient);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method PUT UPDATE ROLE
export const updateIngredient = async (req, res) => {
  try {
    const { name, extraPrice, stock, category } = req.body;
    const { id } = req.params;
    const updateIngredient = await Ingredient.findByIdAndUpdate(
      id,
      { name, extraPrice, stock, category },
      {
        new: true,
      }
    );
    return res.status(200).json(updateIngredient);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method DELETE  ROLE
export const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteIngredient = await Ingredient.findByIdAndDelete(id);

    if (!deleteIngredient)
      return res.status(404).json({ msg: "Ingredient not Found" });

    return res.status(200).json(deleteIngredient);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
