const db = require('../config/db');

class Discount {
    static getAll() {
        const query = 'SELECT * FROM discounts';
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

    static getById(discountID) {
        const query = 'SELECT * FROM discounts WHERE discount_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [discountID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(discountData) {
        const { duration, amount } = discountData;
        const query = 'INSERT INTO discounts (duration, amount) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [duration, amount], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(discountID, discountData) {
        const { duration, amount } = discountData;
        const query = 'UPDATE discounts SET duration = ?, amount = ? WHERE discount_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [duration, amount, discountID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(discountID) {
        const query = 'DELETE FROM discounts WHERE discount_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [discountID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Discount;
