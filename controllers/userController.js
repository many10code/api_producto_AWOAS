const { response } = require('express');
const User = require('../models/userModel');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateUser(req, res) {
        try {
            const user = await User.update(req.params.id, req.body); 
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static async deleteUser(req, res) {
        try {
            const user = await User.delete(req.params.id, req.body); 
            if (!user) {
                return res.status(200).json({ message: 'Eliminado con exito ' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;