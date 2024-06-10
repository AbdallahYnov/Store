const Discount = require('../models/discountModel');

// Get all discounts
exports.getAllDiscounts = async (req, res) => {
    try {
        const discounts = await Discount.getAll();
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get discount by ID
exports.getDiscountById = async (req, res) => {
    const discountId = req.params.id;
    try {
        const discount = await Discount.getById(discountId);
        if (!discount) {
            return res.status(404).json({ message: "Discount not found" });
        }
        res.status(200).json(discount);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new discount
exports.createDiscount = async (req, res) => {
    try {
        const result = await Discount.create(req.body);
        res.status(201).json({ message: "Discount created successfully", discountId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update discount
exports.updateDiscount = async (req, res) => {
    const discountId = req.params.id;
    try {
        const result = await Discount.update(discountId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Discount not found" });
        }
        res.status(200).json({ message: "Discount updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete discount
exports.deleteDiscount = async (req, res) => {
    const discountId = req.params.id;
    try {
        const result = await Discount.delete(discountId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Discount not found" });
        }
        res.status(200).json({ message: "Discount deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
