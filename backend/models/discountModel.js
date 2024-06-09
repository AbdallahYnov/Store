const db = require('../config/db');

const Discount = {};

Discount.getAll = (callback) => {
    db.query('SELECT * FROM discounts', callback);
};

Discount.getById = (id, callback) => {
    db.query('SELECT * FROM discounts WHERE discount_id = ?', [id], callback);
};

Discount.create = (discountData, callback) => {
    const { duration, amount } = discountData;
    db.query(
        'INSERT INTO discounts (duration, amount) VALUES (?, ?)',
        [duration, amount],
        callback
    );
};

Discount.update = (id, discountData, callback) => {
    const { duration, amount } = discountData;
    db.query(
        'UPDATE discounts SET duration = ?, amount = ? WHERE discount_id = ?',
        [duration, amount, id],
        callback
    );
};

Discount.delete = (id, callback) => {
    db.query('DELETE FROM discounts WHERE discount_id = ?', [id], callback);
};

module.exports = Discount;
