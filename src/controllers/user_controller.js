const user_model = require("../models/user_model")

module.exports = {
    addUser: async (req, res) => {
        try {
            const user = new user_model(req.body)
            const result = await user.save()
            res.status(201).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getUser: async (req, res) => {
        try {
            const result = await user_model.find()
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getUserById: async (req, res) => {
        try {
            const result = await user_model.findById(req.params.id)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    getUserByUUID: async (req, res) => {
        try {
            const result = await user_model.findOne({ uuid: req.params.uuid })
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    updateUser: async (req, res) => {
        try {
            const result = await user_model.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const result = await user_model.findByIdAndDelete(req.params.id)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    },
    login: async (req, res) => {
        try {
            const result = await user_model.findOne({ username: req.body.username, password: req.body.password })
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send(error)
        }
    }
}
