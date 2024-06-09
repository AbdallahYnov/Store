const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    const { id } = req.params;
    Product.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createProduct = (req, res) => {
    const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = req.body;
    const newProduct = { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id };

    Product.create(newProduct, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating product', error: err });
        }
        res.status(201).json({ message: 'Product created successfully' });
    });
};

exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = req.body;

    Product.update(id, { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating product', error: err });
        }
        res.json({ message: 'Product updated successfully' });
    });
};

exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Product deleted successfully' });
    });
};
