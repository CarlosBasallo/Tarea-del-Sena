const User = require('../models/User');

async function createUser(req, res, next) { try {
  const user = await User.create(req.body);
  res.status(201).json({ ok: true,  user });
} catch (e) { next(e); } }

async function listUsers(req, res, next) { try {
  const users = await User.find().sort({ createdAt: -1 });
  res.json({ ok: true,  users });
} catch (e) { next(e); } }

async function getUser(req, res, next) { try {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  user });
} catch (e) { next(e); } }

async function updateUser(req, res, next) { try {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!user) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  user });
} catch (e) { next(e); } }

async function deleteUser(req, res, next) { try {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  user });
} catch (e) { next(e); } }

module.exports = { createUser, listUsers, getUser, updateUser, deleteUser };
