const db = require('../config/db');

const Order = {};

Order.getAll = (callback) => {
    db.query('SELECT * FROM orders', callback);
};

Order.getById = (id, callback) => {
    db.query('SELECT * FROM orders WHERE order_id = ?', [id], callback);
};

Order.create = (orderData, callback) => {
    const { total, purchase_date, creation_date, address, state, user_id } = orderData;
    db.query(
        'INSERT INTO orders (total, purchase_date, creation_date, address, state, user_id) VALUES (?, ?, ?, ?, ?, ?)',
        [total, purchase_date, creation_date, address, state, user_id],
        callback
    );
};

Order.update = (id, orderData, callback) => {
    const { total, purchase_date, creation_date, address, state, user_id } = orderData;
    db.query(
        'UPDATE orders SET total = ?, purchase_date = ?, creation_date = ?, address = ?, state = ?, user_id = ? WHERE order_id = ?',
        [total, purchase_date, creation_date, address, state, user_id, id],
        callback
    );
};

Order.delete = (id, callback) => {
    db.query('DELETE FROM orders WHERE order_id = ?', [id], callback);
};

module.exports = Order;
