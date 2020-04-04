const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlSitter = require('../controllers/sitter.controller');
const ctrlComment = require('../controllers/comment.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/user/:id', ctrlUser.getUser);

router.post('/sitter', ctrlSitter.createSitter);
router.get('/sitter', ctrlSitter.getSitters);
router.get('/sitter/:id', ctrlSitter.getSitterById);
router.delete('/sitter/:id', ctrlSitter.deleteSitterById);
router.put('/sitter/:id', ctrlSitter.updateSitterById);

router.post('/comment', ctrlComment.addComment);
router.get('/comment', ctrlComment.getComments);

module.exports = router; 