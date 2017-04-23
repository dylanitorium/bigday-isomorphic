import User from '../models/users';

export const filterProperties = user => ({
  id: user.id,
  name: user.name || {},
  email: user.email,
});

export const createUser = data => User.create(data);

export const deleteUser = id => User.findByIdAndRemove(id);

export const getUser = cond => User.findOne(cond);

export const getUserById = id => User.findById(id);

export const getAllUsers = () => User.find().exec();


