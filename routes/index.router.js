const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlSitter = require('../controllers/sitter.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/sitter', ctrlSitter.createSitter);
router.get('/sitter', ctrlSitter.getSitters);
router.get('/sitter/:id', ctrlSitter.getSitterById);
router.delete('/sitter/:id', ctrlSitter.deleteSitterById);

module.exports = router; 