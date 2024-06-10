const OrderDetail = require('../models/orderDetailModel');

// Get all order details
exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.getAll();
        res.status(200).json(orderDetails);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get order detail by ID
exports.getOrderDetailById = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const orderDetail = await OrderDetail.getById(orderDetailId);
        if (!orderDetail) {
            return res.status(404).json({ message: "Order detail not found" });
        }
        res.status(200).json(orderDetail);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new order detail
exports.createOrderDetail = async (req, res) => {
    try {
        const result = await OrderDetail.create(req.body);
        res.status(201).json({ message: "Order detail created successfully", orderDetailId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update order detail
exports.updateOrderDetail = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const result = await OrderDetail.update(orderDetailId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Order detail not found" });
        }
        res.status(200).json({ message: "Order detail updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete order detail
exports.deleteOrderDetail = async (req, res) => {
    const orderDetailId = req.params.id;
    try {
        const result = await OrderDetail.delete(orderDetailId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Order detail not found" });
        }
        res.status(200).json({ message: "Order detail deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
