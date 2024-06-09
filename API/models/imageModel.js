const db = require('../config/db');

const Image = {};

Image.getAll = (callback) => {
    db.query('SELECT * FROM images', callback);
};

Image.getById = (id, callback) => {
    db.query('SELECT * FROM images WHERE image_id = ?', [id], callback);
};

Image.create = (imageData, callback) => {
    const { name, chemin, idx, product_id } = imageData;
    db.query(
        'INSERT INTO images (name, chemin, idx, product_id) VALUES (?, ?, ?, ?)',
        [name, chemin, idx, product_id],
        callback
    );
};

Image.update = (id, imageData, callback) => {
    const { name, chemin, idx, product_id } = imageData;
    db.query(
        'UPDATE images SET name = ?, chemin = ?, idx = ?, product_id = ? WHERE image_id = ?',
        [name, chemin, idx, product_id, id],
        callback
    );
};

Image.delete = (id, callback) => {
    db.query('DELETE FROM images WHERE image_id = ?', [id], callback);
};

module.exports = Image;
