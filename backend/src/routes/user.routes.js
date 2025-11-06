const { Router } = require('express');
const { createUser, listUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller');
const router = Router();

router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
