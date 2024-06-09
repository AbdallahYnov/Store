const Category = require('../models/categoryModel');

exports.getAllCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getCategoryById = (req, res) => {
    const { id } = req.params;
    Category.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createCategory = (req, res) => {
    const { name, size } = req.body;
    const newCategory = { name, size };

    Category.create(newCategory, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating category', error: err });
        }
        res.status(201).json({ message: 'Category created successfully' });
    });
};

exports.updateCategory = (req, res) => {
    const { id } = req.params;
    const { name, size } = req.body;

    Category.update(id, { name, size }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating category', error: err });
        }
        res.json({ message: 'Category updated successfully' });
    });
};

exports.deleteCategory = (req, res) => {
    const { id } = req.params;
    Category.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Category deleted successfully' });
    });
};
