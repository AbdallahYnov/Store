const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getHomePage);
router.get('/products', mainController.getProductsPage);
router.get('/products/:id', mainController.getProductDetailPage);
router.get('/register', mainController.getRegisterPage);
router.get('/register', mainController.registerUser);
router.get('/login', mainController.getLoginPage);
router.get('/profile', mainController.getProfilePage);
router.get('/orders', mainController.getOrdersPage);
router.get('/cart', mainController.getCartPage);
router.get('/checkout', mainController.getCheckoutPage);
router.get('/error', mainController.getErrorPage);

module.exports = router;
