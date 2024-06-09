const ProductReview = require('../models/productReviewModel');

exports.getAllProductReviews = (req, res) => {
    ProductReview.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getProductReviewById = (req, res) => {
    const { id } = req.params;
    ProductReview.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createProductReview = (req, res) => {
    const { rating, is_positive, product_id, user_id } = req.body;
    const newProductReview = { rating, is_positive, product_id, user_id };

    ProductReview.create(newProductReview, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating product review', error: err });
        }
        res.status(201).json({ message: 'Product review created successfully' });
    });
};

exports.updateProductReview = (req, res) => {
    const { id } = req.params;
    const { rating, is_positive, product_id, user_id } = req.body;

    ProductReview.update(id, { rating, is_positive, product_id, user_id }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating product review', error: err });
        }
        res.json({ message: 'Product review updated successfully' });
    });
};

exports.deleteProductReview = (req, res) => {
    const { id } = req.params;
    ProductReview.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Product review deleted successfully' });
    });
};
