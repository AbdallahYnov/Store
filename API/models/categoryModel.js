const db = require('../config/db');

class Category {
    static getAll() {
        const query = 'SELECT * FROM categories';
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

    static getById(categoryID) {
        const query = 'SELECT * FROM categories WHERE category_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [categoryID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(categoryData) {
        const { name, size } = categoryData;
        const query = 'INSERT INTO categories (name, size) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [name, size], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(categoryID, categoryData) {
        const { name, size } = categoryData;
        const query = 'UPDATE categories SET name = ?, size = ? WHERE category_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [name, size, categoryID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(categoryID) {
        const query = 'DELETE FROM categories WHERE category_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [categoryID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Category;
