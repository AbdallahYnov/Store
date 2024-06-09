const Order = require('../models/orderModel');

exports.getAllOrders = (req, res) => {
    Order.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getOrderById = (req, res) => {
    const { id } = req.params;
    Order.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createOrder = (req, res) => {
    const { total, purchase_date, creation_date, address, state, user_id } = req.body;
    const newOrder = { total, purchase_date, creation_date, address, state, user_id };

    Order.create(newOrder, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating order', error: err });
        }
        res.status(201).json({ message: 'Order created successfully' });
    });
};

exports.updateOrder = (req, res) => {
    const { id } = req.params;
    const { total, purchase_date, creation_date, address, state, user_id } = req.body;

    Order.update(id, { total, purchase_date, creation_date, address, state, user_id }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating order', error: err });
        }
        res.json({ message: 'Order updated successfully' });
    });
};

exports.deleteOrder = (req, res) => {
    const { id } = req.params;
    Order.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Order deleted successfully' });
    });
};
