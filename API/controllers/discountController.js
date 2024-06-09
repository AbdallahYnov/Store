const Discount = require('../models/discountModel');

exports.getAllDiscounts = (req, res) => {
    Discount.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getDiscountById = (req, res) => {
    const { id } = req.params;
    Discount.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createDiscount = (req, res) => {
    const { duration, amount } = req.body;
    const newDiscount = { duration, amount };

    Discount.create(newDiscount, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating discount', error: err });
        }
        res.status(201).json({ message: 'Discount created successfully' });
    });
};

exports.updateDiscount = (req, res) => {
    const { id } = req.params;
    const { duration, amount } = req.body;

    Discount.update(id, { duration, amount }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating discount', error: err });
        }
        res.json({ message: 'Discount updated successfully' });
    });
};

exports.deleteDiscount = (req, res) => {
    const { id } = req.params;
    Discount.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Discount deleted successfully' });
    });
};
