const db = require('../config/db');

class Image {
    static getAll() {
        const query = 'SELECT * FROM images';
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

    static getById(imageID) {
        const query = 'SELECT * FROM images WHERE image_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [imageID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }

    static create(imageData) {
        const { name, chemin, idx, product_id } = imageData;
        const query = 'INSERT INTO images (name, chemin, idx, product_id) VALUES (?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.query(query, [name, chemin, idx, product_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static update(imageID, imageData) {
        const { name, chemin, idx, product_id } = imageData;
        const query = 'UPDATE images SET name = ?, chemin = ?, idx = ?, product_id = ? WHERE image_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [name, chemin, idx, product_id, imageID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static delete(imageID) {
        const query = 'DELETE FROM images WHERE image_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [imageID], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Image;
