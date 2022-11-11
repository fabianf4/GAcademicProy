const activities_model = require("../models/activities_model")

module.exports = {
    addActivity: async (req, res) => {
        try {
            const activity = new activities_model(req.body)
            const result = await activity.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getActivity: async (req, res) => {
        try {
            const result = await activities_model.find()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getActivityById: async (req, res) => {
        try {
            const result = await activities_model.findById(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updateActivity: async (req, res) => {
        try {
            const result = await activities_model.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deleteActivity: async (req, res) => {
        try {
            const result = await activities_model.findByIdAndDelete(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}