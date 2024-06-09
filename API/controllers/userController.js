const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const { id } = req.params;
    User.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(result[0]);
    });
};

exports.createUser = async (req, res) => {
    const { email, username, password, basket, role, address } = req.body;

    if (!email || !username || !password || !basket) {
        return res.status(400).json({ message: 'Email, username, password, and basket are required' });
    }

    try {
        User.getByUsername(username, (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }
            if (results.length > 0) {
                return res.status(400).json({ message: 'Username already exists' });
            }

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: 'Error hashing password', error: err });
                }

                const newUser = {
                    email,
                    username,
                    password: hash,
                    basket,
                    role,
                    address
                };

                User.create(newUser, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Error creating user', error: err });
                    }
                    res.status(201).json({ message: 'User created successfully' });
                });
            });
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, username, password, basket, role, address } = req.body;

    User.getById(id, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password) {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: 'Error hashing password', error: err });
                }
                updateUser(hash);
            });
        } else {
            updateUser(results[0].password);
        }

        function updateUser(hashedPassword) {
            const updatedUser = {
                email,
                username,
                password: hashedPassword,
                basket,
                role,
                address
            };
            User.update(id, updatedUser, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Error updating user', error: err });
                }
                res.json({ message: 'User updated successfully' });
            });
        }
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    User.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json({ message: 'User deleted successfully' });
    });
};
