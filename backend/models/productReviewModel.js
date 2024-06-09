const db = require('../config/db');

const ProductReview = {};

ProductReview.getAll = (callback) => {
    db.query('SELECT * FROM productreviews', callback);
};

ProductReview.getById = (id, callback) => {
    db.query('SELECT * FROM productreviews WHERE review_id = ?', [id], callback);
};

ProductReview.create = (reviewData, callback) => {
    const { rating, is_positive, product_id, user_id } = reviewData;
    db.query(
        'INSERT INTO productreviews (rating, is_positive, product_id, user_id) VALUES (?, ?, ?, ?)',
        [rating, is_positive, product_id, user_id],
        callback
    );
};

ProductReview.update = (id, reviewData, callback) => {
    const { rating, is_positive, product_id, user_id } = reviewData;
    db.query(
        'UPDATE productreviews SET rating = ?, is_positive = ?, product_id = ?, user_id = ? WHERE review_id = ?',
        [rating, is_positive, product_id, user_id, id],
        callback
    );
};

ProductReview.delete = (id, callback) => {
    db.query('DELETE FROM productreviews WHERE review_id = ?', [id], callback);
};

module.exports = ProductReview;
