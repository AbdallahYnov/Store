const Order = require('../models/orderModel');

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.getAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.getById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new order
exports.createOrder = async (req, res) => {
    try {
        const result = await Order.create(req.body);
        res.status(201).json({ message: "Order created successfully", orderId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update order
exports.updateOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const result = await Order.update(orderId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete order
exports.deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const result = await Order.delete(orderId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
