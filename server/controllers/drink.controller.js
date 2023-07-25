import Drink from '../models/drink.model.js';

// Method Get All Drinks
export const getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    if (!drinks) return res.status(404).json({ msg: 'Drinks not Founds' });

    return res.status(200).json(drinks);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method Get One Drink
export const getDrinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findById(id);

    // validations
    if (!drink) return res.status(404).json({ msg: 'Drink not found' });

    return res.status(200).json(drink);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method POST Create Drink
export const createDrink = async (req, res) => {
  try {
    const { name, price, category, stock, size } = req.body;

    const newDrink = new Drink({
      name,
      price,
      category,
      stock,
      size,
    });
    if (!newDrink.name) return res.status(404).json({ msg: "Nombre inválido" });
    const result = await newDrink.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method PUT Update Drink
export const updateDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, stock, size } = req.body;
    const updateDrink = await Drink.findByIdAndUpdate(
      id,
      {
        name,
        price,
        category,
        stock,
        size,
      },
      { new: true }
    );

    //validaciones
    if (!updateDrink) res.status(404).json({ msg: 'Drink Not Found' });

    return res.status(200).json(updateDrink);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method DELETE Eliminar Drink por ID
export const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findByIdAndRemove(id);
    //validaciones
    if (!drink)
      return res.status(404).json({ msg: 'Drink not found for delete' });

    return res.status(200).json(drink);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
