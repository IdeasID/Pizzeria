import User from '../models/user.model.js';
import Role from '../models/role.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../lib/token.util.js';

//METHOD POST PARA REGISTRAR USER
export const register = async (req, res) => {
  const { email, username, password, phone, roles } = req.body;
  try {
    //validacione y encriptacion del password
    const usefound = await User.findOne({ email });
    if (usefound) return res.status(400).json(['Email already used']);

    const newUser = new User({
      email,
      username,
      password: await User.encryptPassword(password),
      phone,
    });
    //Validate Roles
    if (roles) {
      const foundRole = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRole.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: 'user' });
      newUser.roles = [role._id];
    }
    const result = await newUser.save();

    //Create Token y guardarlo en los cookies
    const token = await createAccessToken({ id: result._id });
    res.cookie('token', token);

    return res.status(200).json({
      id: result._id,
      username: result.username,
      email: result.email,
      phone: result.phone,
      token: token,
    });
  } catch (error) {
    res.json(error);
  }
};

//METHOD POST PARA LOGIN USER
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userfound = await User.findOne({ email });
    if (!userfound) return res.status(404).json(['user not found']);

    const isMatch = await bcrypt.compare(password, userfound.password);
    if (!isMatch) return res.status(400).json(['Incorrect password']);

    const token = await createAccessToken({ id: userfound._id });
    res.cookie('token', token);

    return res.status(200).json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email,
      phone: userfound.phone,
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};
//METHOD POST PARA LOGOUT USER
export const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) });
  return res.status(200).json({ status: 'success logout' });
};
