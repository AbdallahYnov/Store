const db = require('../config/db');

const Product = {};

Product.getAll = (callback) => {
    db.query('SELECT * FROM products', callback);
};

Product.getById = (id, callback) => {
    db.query('SELECT * FROM products WHERE product_id = ?', [id], callback);
};

Product.create = (productData, callback) => {
    const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = productData;
    db.query(
        'INSERT INTO products (name, description, price, quantity, couleur, type, gender, size, discount_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [name, description, price, quantity, couleur, type, gender, size, discount_id, category_id],
        callback
    );
};

Product.update = (id, productData, callback) => {
    const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = productData;
    db.query(
        'UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, couleur = ?, type = ?, gender = ?, size = ?, discount_id = ?, category_id = ? WHERE product_id = ?',
        [name, description, price, quantity, couleur, type, gender, size, discount_id, category_id, id],
        callback
    );
};

Product.delete = (id, callback) => {
    db.query('DELETE FROM products WHERE product_id = ?', [id], callback);
};

module.exports = Product;
