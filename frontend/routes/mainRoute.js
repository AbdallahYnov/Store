const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);

router.get('/products', mainController.getAllProducts);
router.get('/products/:id', mainController.getProductById);
router.get('/register', mainController.createUser);
router.get('/register/done', mainController.registerUser);
router.get('/login', mainController.getLoginPage);
router.get('/profile/:id', mainController.getUserById);
router.get('/orders', mainController.getOrderById);
router.get('/cart', mainController.getCartPage);
router.get('/checkout', mainController.getCheckoutPage);
router.get('/error', mainController.getErrorPage);

module.exports = router;
