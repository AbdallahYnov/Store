const ProductReview = require('../models/productReviewModel');

// Get all product reviews
exports.getAllProductReviews = async (req, res) => {
    try {
        const productReviews = await ProductReview.getAll();
        res.status(200).json(productReviews);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get product review by ID
exports.getProductReviewById = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const productReview = await ProductReview.getById(productReviewId);
        if (!productReview) {
            return res.status(404).json({ message: "Product review not found" });
        }
        res.status(200).json(productReview);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new product review
exports.createProductReview = async (req, res) => {
    try {
        const result = await ProductReview.create(req.body);
        res.status(201).json({ message: "Product review created successfully", productReviewId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update product review
exports.updateProductReview = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const result = await ProductReview.update(productReviewId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product review not found" });
        }
        res.status(200).json({ message: "Product review updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete product review
exports.deleteProductReview = async (req, res) => {
    const productReviewId = req.params.id;
    try {
        const result = await ProductReview.delete(productReviewId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Product review not found" });
        }
        res.status(200).json({ message: "Product review deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
