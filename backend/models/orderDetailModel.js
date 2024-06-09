const db = require('../config/db');

const OrderDetail = {};

OrderDetail.getAll = (callback) => {
    db.query('SELECT * FROM orderdetails', callback);
};

OrderDetail.getById = (id, callback) => {
    db.query('SELECT * FROM orderdetails WHERE orderdetail_id = ?', [id], callback);
};

OrderDetail.create = (orderDetailData, callback) => {
    const { quantity, price, product, product_id, order_id } = orderDetailData;
    db.query(
        'INSERT INTO orderdetails (quantity, price, product, product_id, order_id) VALUES (?, ?, ?, ?, ?)',
        [quantity, price, product, product_id, order_id],
        callback
    );
};

OrderDetail.update = (id, orderDetailData, callback) => {
    const { quantity, price, product, product_id, order_id } = orderDetailData;
    db.query(
        'UPDATE orderdetails SET quantity = ?, price = ?, product = ?, product_id = ?, order_id = ? WHERE orderdetail_id = ?',
        [quantity, price, product, product_id, order_id, id],
        callback
    );
};

OrderDetail.delete = (id, callback) => {
    db.query('DELETE FROM orderdetails WHERE orderdetail_id = ?', [id], callback);
};

module.exports = OrderDetail;
