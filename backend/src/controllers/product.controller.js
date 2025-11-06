const Product = require('../models/Product');

async function createProduct(req, res, next) { try {
  const product = await Product.create(req.body);
  res.status(201).json({ ok: true,  product });
} catch (e) { next(e); } }

async function listProducts(req, res, next) { try {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json({ ok: true,  products });
} catch (e) { next(e); } }

async function getProduct(req, res, next) { try {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  product });
} catch (e) { next(e); } }

async function updateProduct(req, res, next) { try {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  product });
} catch (e) { next(e); } }

async function deleteProduct(req, res, next) { try {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ ok: false, message: 'No encontrado' });
  res.json({ ok: true,  product });
} catch (e) { next(e); } }

module.exports = { createProduct, listProducts, getProduct, updateProduct, deleteProduct };
