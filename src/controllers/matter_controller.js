const matter_model = require("../models/matter_model")
const user_model = require("../models/user_model")

module.exports = {
    addMatter: async (req, res) => {
        try {
            const {teacher, position} = req.body

            const {position: positionTeacher} = await user_model.findById(teacher)

            if(positionTeacher != position){
                return res.status(400).send("El usuario no puede ser asignado a la materia")
            }

            const matter = new matter_model(req.body)
            const result = await matter.save()
            res.status(201).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getMatter: async (req, res) => {
        try {
            const result = await matter_model.find()
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getMatterById: async (req, res) => {
        try {
            const result = await matter_model.findById(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updateMatter: async (req, res) => {
        try {
            const result = await matter_model.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deleteMatter: async (req, res) => {
        try {
            const result = await matter_model.findByIdAndDelete(req.params.id)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addActivityToMatter: async (req, res) => {
        try {
            const result = await matter_model
                .findByIdAndUpdate(req.params.id, {
                    $push: {
                        activities: req.body.activity
                    }
                })
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    addStudentToMatter: async (req, res) => {
        try {
            const result = await matter_model
                .findByIdAndUpdate(req.params.id, {
                    $push: {
                        students: req.body.student
                    }
                })
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getMatterWithActivities: async (req, res) => {
        try {
            const result = await matter_model.findById(req.params.id).populate("activities")
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send
        }
    },
    getMatterWithStudents: async (req, res) => {
        try {
            const result = await matter_model.findById(req.params.id).populate("students")
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send
        }
    }
}