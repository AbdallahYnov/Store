const OrderDetail = require('../models/orderDetailModel');

exports.getAllOrderDetails = (req, res) => {
    OrderDetail.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getOrderDetailById = (req, res) => {
    const { id } = req.params;
    OrderDetail.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createOrderDetail = (req, res) => {
    const { quantity, price, product, product_id, order_id } = req.body;
    const newOrderDetail = { quantity, price, product, product_id, order_id };

    OrderDetail.create(newOrderDetail, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating order detail', error: err });
        }
        res.status(201).json({ message: 'Order detail created successfully' });
    });
};

exports.updateOrderDetail = (req, res) => {
    const { id } = req.params;
    const { quantity, price, product, product_id, order_id } = req.body;

    OrderDetail.update(id, { quantity, price, product, product_id, order_id }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating order detail', error: err });
        }
        res.json({ message: 'Order detail updated successfully' });
    });
};

exports.deleteOrderDetail = (req, res) => {
    const { id } = req.params;
    OrderDetail.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Order detail deleted successfully' });
    });
};
