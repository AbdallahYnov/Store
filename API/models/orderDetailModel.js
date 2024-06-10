const db = require('../config/db');

class OrderDetail {
    static getAll() {
        const query = 'SELECT * FROM orderdetails';
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

    static getById(orderDetailID) {
        const query = 'SELECT * FROM orderdetails WHERE orderdetail_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [orderDetailID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(orderDetailData) {
        const { quantity, price, product, product_id, order_id } = orderDetailData;
        const query = 'INSERT INTO orderdetails (quantity, price, product, product_id, order_id) VALUES (?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [quantity, price, product, product_id, order_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(orderDetailID, orderDetailData) {
        const { quantity, price, product, product_id, order_id } = orderDetailData;
        const query = 'UPDATE orderdetails SET quantity = ?, price = ?, product = ?, product_id = ?, order_id = ? WHERE orderdetail_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [quantity, price, product, product_id, order_id, orderDetailID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(orderDetailID) {
        const query = 'DELETE FROM orderdetails WHERE orderdetail_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [orderDetailID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = OrderDetail;
