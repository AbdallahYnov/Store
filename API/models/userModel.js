const db = require('../config/db');

class User {
    static getAll() {
        const query = 'SELECT * FROM users';
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

    static getById(userID) {
        const query = 'SELECT * FROM users WHERE user_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [userID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static getByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [username], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(userData) {
        const { email, username, password, basket, role, address } = userData;
        const query = 'INSERT INTO users (email, username, password, basket, role, address) VALUES (?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [email, username, password, basket, role, address], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(userID, userData) {
        const { email, username, password, basket, role, address } = userData;
        const query = 'UPDATE users SET email = ?, username = ?, password = ?, basket = ?, role = ?, address = ? WHERE user_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [email, username, password, basket, role, address, userID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(userID) {
        const query = 'DELETE FROM users WHERE user_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [userID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = User;
