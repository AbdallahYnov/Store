const Category = require('../models/categoryModel');

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.getAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Get category by ID
exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const category = await Category.getById(categoryId);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Create new category
exports.createCategory = async (req, res) => {
    try {
        const result = await Category.create(req.body);
        res.status(201).json({ message: "Category created successfully", categoryId: result.insertId });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Update category
exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const result = await Category.update(categoryId, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category updated successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

// Delete category
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const result = await Category.delete(categoryId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
