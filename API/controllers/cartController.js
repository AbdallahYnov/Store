const Product = require('../models/productModel');

// Récupère les détails d'un produit à partir du panier
exports.GetProductFromCart = async (req, res) => {
    const productId = req.params.id;
    try {
        const productDetails = await Product.getById(productId);
        res.render('product', { product: productDetails });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des détails du produit" });
    }
};