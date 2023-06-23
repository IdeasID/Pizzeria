import Role from '../models/role.model.js';

// Method GET ALL ROLES
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    if (!roles) return res.status(404).json({ msg: 'Role not Found' });
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method POST CREATE ROLES
export const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = new Role({ name });
    const saveRole = await newRole.save();
    return res.status(200).json(saveRole);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method GET ONE ROLE
export const getRolesById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findById(id);
    if (!role) return res.status(404).json({ msg: 'Role not Found' });

    return res.status(200).json(role);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method PUT UPDATE ROLE
export const updateRole = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateRole = await Role.findByIdAndUpdate(
      id,
      { name },
      {
        new: true,
      }
    );
    return res.status(200).json(updateRole);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
// Method DELETE  ROLE
export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRole = await Role.findByIdAndDelete(id);

    if (!deleteRole) return res.status(404).json({ msg: 'Role not Found' });

    return res.status(200).json(deleteRole);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
