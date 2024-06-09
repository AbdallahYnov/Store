const db = require('../config/db');

const Category = {};

Category.getAll = (callback) => {
    db.query('SELECT * FROM categories', callback);
};

Category.getById = (id, callback) => {
    db.query('SELECT * FROM categories WHERE category_id = ?', [id], callback);
};

Category.create = (categoryData, callback) => {
    const { name, size } = categoryData;
    db.query(
        'INSERT INTO categories (name, size) VALUES (?, ?)',
        [name, size],
        callback
    );
};

Category.update = (id, categoryData, callback) => {
    const { name, size } = categoryData;
    db.query(
        'UPDATE categories SET name = ?, size = ? WHERE category_id = ?',
        [name, size, id],
        callback
    );
};

Category.delete = (id, callback) => {
    db.query('DELETE FROM categories WHERE category_id = ?', [id], callback);
};

module.exports = Category;
