const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/detail/:id', cartController.GetProductFromCart); // Route pour récupérer les détails d'un produit spécifique




module.exports = router;
