const Image = require('../models/imageModel');

exports.getAllImages = (req, res) => {
    Image.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getImageById = (req, res) => {
    const { id } = req.params;
    Image.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createImage = (req, res) => {
    const { name, chemin, idx, product_id } = req.body;
    const newImage = { name, chemin, idx, product_id };

    Image.create(newImage, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating image', error: err });
        }
        res.status(201).json({ message: 'Image created successfully' });
    });
};

exports.updateImage = (req, res) => {
    const { id } = req.params;
    const { name, chemin, idx, product_id } = req.body;

    Image.update(id, { name, chemin, idx, product_id }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating image', error: err });
        }
        res.json({ message: 'Image updated successfully' });
    });
};

exports.deleteImage = (req, res) => {
    const { id } = req.params;
    Image.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'Image deleted successfully' });
    });
};
