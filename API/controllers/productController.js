const Product = require('../models/productModel');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    const productId = req.params.id;
    const link = req.protocol + '://' + req.get('host');
    try {
        const product = await Product.getById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        product.picture = `${link}/image/${product.picture}`; // If your product has a 'picture' field
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new product
exports.createProduct = async (req, res) => {
    try {
        const result = await Product.create(req.body);
        res.status(201).json({ message: "Product created successfully", productId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await Product.update(productId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await Product.delete(productId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
