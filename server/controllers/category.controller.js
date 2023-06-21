//Import Model Category
import { json } from 'express';
import Category from '../models/category.model.js';

// Method Get Traer todas las categorias
export const getCategorys = async (req, res) => {
  try {
    const categorys = await Category.find();

    res.status(200).json(categorys);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Method Get Traer una  categorias
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category)
      return res.status(404), json({ msg: 'Category no encontrada' });

    return res.status(200).json(category);
  } catch (error) {
    return res.json(error.message);
  }
};

// Method POST crear categorias
export const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCategory = new Category({
      nombre,
    });

    const result = await newCategory.save();

    res.status(200).json(result);
  } catch (error) {
    return res.json(error.message);
  }
};

// Method DELETE  eliminar una  categorias
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndRemove(id);
    // Validate category existe
    if (!category) return res.status(404).json({ msg: 'Task not found' });

    return res.status(200).json(category);
  } catch (error) {
    return res.json(error.message);
  }
};

// Method PUT actualiza una categorias
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { nombre },
      { new: true }
    );

    //Validate query
    if (!category) return res.status(404).json({ status: 'Updated Faild' });
    // Return Query
    return res.status(200).json({ category });
  } catch (error) {}
};
