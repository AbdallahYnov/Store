const db = require('../config/db');

class ProductReview {
    static getAll() {
        const query = 'SELECT * FROM productreviews';
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

    static getById(reviewID) {
        const query = 'SELECT * FROM productreviews WHERE review_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [reviewID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(reviewData) {
        const { rating, is_positive, product_id, user_id } = reviewData;
        const query = 'INSERT INTO productreviews (rating, is_positive, product_id, user_id) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [rating, is_positive, product_id, user_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(reviewID, reviewData) {
        const { rating, is_positive, product_id, user_id } = reviewData;
        const query = 'UPDATE productreviews SET rating = ?, is_positive = ?, product_id = ?, user_id = ? WHERE review_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [rating, is_positive, product_id, user_id, reviewID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(reviewID) {
        const query = 'DELETE FROM productreviews WHERE review_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [reviewID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = ProductReview;
