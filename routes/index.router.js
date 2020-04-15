const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlSitter = require('../controllers/sitter.controller');
const ctrlComment = require('../controllers/comment.controller');
const ctrlOrders = require('../controllers/order.controller');
const ctrlBook = require('../controllers/book.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/user/:id', ctrlUser.getUser);

router.post('/sitter', ctrlSitter.createSitter);
router.get('/sitter', ctrlSitter.getSitters);
router.get('/sitter/:id', ctrlSitter.getSitterById);
router.delete('/sitter/:id', ctrlSitter.deleteSitterById);
router.put('/sitter/:id', ctrlSitter.updateSitterById);
router.put('/sitter-rate/:id', ctrlSitter.updateSitterRateById);

router.post('/comment', ctrlComment.addComment);
router.get('/comment', ctrlComment.getComments);

router.post('/order', ctrlOrders.createOrder);
router.get('/order', ctrlOrders.getOrders);
router.put('/order/:id', ctrlOrders.addOffer);

router.post('/book', ctrlBook.addBook);
router.get('/book', ctrlBook.getBooks);
router.put('/book/:id', ctrlBook.updateBookStatus);
router.delete('/book/:id', ctrlBook.declineBookById);

router.post('/profile-update/:id', ctrlUser.updateProfile);

module.exports = router; 