const { Router } = require('express');
const { createProduct, listProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');
const router = Router();

router.post('/', createProduct);
router.get('/', listProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
