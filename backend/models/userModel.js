const db = require('../config/db');

const User = {};

User.getAll = (callback) => {
    db.query('SELECT * FROM users', callback);
};

User.getById = (id, callback) => {
    db.query('SELECT * FROM users WHERE user_id = ?', [id], callback);
};

User.getByUsername = (username, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], callback);
};

User.create = (userData, callback) => {
    const { email, username, password, basket, role, address } = userData;
    db.query(
        'INSERT INTO users (email, username, password, basket, role, address) VALUES (?, ?, ?, ?, ?, ?)',
        [email, username, password, basket, role, address],
        callback
    );
};

User.update = (id, userData, callback) => {
    const { email, username, password, basket, role, address } = userData;
    db.query(
        'UPDATE users SET email = ?, username = ?, password = ?, basket = ?, role = ?, address = ? WHERE user_id = ?',
        [email, username, password, basket, role, address, id],
        callback
    );
};

User.delete = (id, callback) => {
    db.query('DELETE FROM users WHERE user_id = ?', [id], callback);
};

module.exports = User;
