const db = require('../config/db');

class Product {
    static getAll() {
        const query = 'SELECT * FROM products';
        return new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getById(productID) {
        const query = 'SELECT * FROM products WHERE product_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [productID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(productData) {
        const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = productData;
        const query = 'INSERT INTO products (name, description, price, quantity, couleur, type, gender, size, discount_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [name, description, price, quantity, couleur, type, gender, size, discount_id, category_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(productID, productData) {
        const { name, description, price, quantity, couleur, type, gender, size, discount_id, category_id } = productData;
        const query = 'UPDATE products SET name = ?, description = ?, price = ?, quantity = ?, couleur = ?, type = ?, gender = ?, size = ?, discount_id = ?, category_id = ? WHERE product_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [name, description, price, quantity, couleur, type, gender, size, discount_id, category_id, productID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(productID) {
        const query = 'DELETE FROM products WHERE product_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [productID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Product;
