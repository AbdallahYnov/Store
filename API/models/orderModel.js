const db = require('../config/db');

class Order {
    static getAll() {
        const query = 'SELECT * FROM orders';
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

    static getById(orderID) {
        const query = 'SELECT * FROM orders WHERE order_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [orderID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(orderData) {
        const { total, purchase_date, creation_date, address, state, user_id } = orderData;
        const query = 'INSERT INTO orders (total, purchase_date, creation_date, address, state, user_id) VALUES (?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [total, purchase_date, creation_date, address, state, user_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(orderID, orderData) {
        const { total, purchase_date, creation_date, address, state, user_id } = orderData;
        const query = 'UPDATE orders SET total = ?, purchase_date = ?, creation_date = ?, address = ?, state = ?, user_id = ? WHERE order_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [total, purchase_date, creation_date, address, state, user_id, orderID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(orderID) {
        const query = 'DELETE FROM orders WHERE order_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [orderID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Order;
