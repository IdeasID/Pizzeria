import Product from '../models/product.model.js';

// Method Get All Procuts
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('categorias');
    if (!products) return res.status(404).json({ msg: 'Products not Founds' });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method Get One Procuts
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate('categorias');

    // validations
    if (!product) return res.status(404).json({ msg: 'Product not found' });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method POST Create Procuts
export const createProduct = async (req, res) => {
  try {
    const { nombre, precio, categorias, stock } = req.body;
    const newProduct = new Product({
      nombre,
      precio,
      categorias,
      stock,
    });

    const result = await newProduct.save();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method PUT Update Procuts
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, categorias, stock } = req.body;
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        nombre,
        precio,
        categorias,
        stock,
      },
      { new: true }
    );

    //validaciones
    if (!updateProduct) res.status(404).json({ msg: 'Product Not Found' });

    return res.status(200).json(updateProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method DELETE Eliminar Procuts
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndRemove(id);
    //validaciones
    if (!product)
      return res.status(404).json({ msg: 'Product not found for delete' });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
