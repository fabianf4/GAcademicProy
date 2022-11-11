const position_model = require("../models/position_model")

module.exports = {
    addPosition: async (req, res) => {
        try {
            const position = new position_model(req.body)
            const result = await position.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getPosition: async (req, res) => {
        try {
            const result = await position_model.find()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getPositionById: async (req, res) => {
        try {
            const result = await position_model.findById(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updatePosition: async (req, res) => {
        try {
            const result = await position_model.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deletePosition: async (req, res) => {
        try {
            const result = await position_model.findByIdAndDelete(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}