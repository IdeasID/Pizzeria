import User from '../models/user.model.js';
import Role from '../models/role.model.js';
import bcrypt from 'bcryptjs';

// Method POST GET TODOS LOS USER
export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find().populate('roles');

    //validateds
    if (!user) return res.status(404).json({ msg: 'Users not Founds' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method GET BUSCAR POR UN ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate('roles');

    //validateds
    if (!user) return res.status(404).json({ msg: 'User not Found' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method POST CREAR USER
export const createUser = async (req, res) => {
  try {
    const { email, username, password, phone, roles } = req.body;

    //validacion del params de email
    const usefound = await User.findOne({ email });
    if (usefound) return res.status(400).json(['Email already used']);

    const newUser = new User({
      email,
      username,
      password: await User.encryptPassword(password),
      phone,
    });
    //validando  y acignando Roles

    if (roles) {
      const foundRole = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRole.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: 'user' });
      newUser.roles = [role._id];
    }

    const user = await newUser.save();
    return res.status(202).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method PUT EDITAR USER
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, username, password, phone, roles } = req.body;

    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        email,
        username,
        password,
        phone,
        roles,
      },
      { new: true }
    );

    if (!updateUser) return res.status(404).json({ msg: 'User not Found' });

    return res.status(202).json(updateUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method DELETE eliminar User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove(id);
    if (!user) return res.status(404).json({ msg: 'User not Found' });

    return res.status(202).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
