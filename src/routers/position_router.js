const express = require("express")
const router = express.Router()

const position_controller = require("../controllers/position_controller")

router.post("/add", position_controller.addPosition)
router.get("/get", position_controller.getPosition)
router.get("/get/:id", position_controller.getPositionById)
router.put("/update/:id", position_controller.updatePosition)
router.delete("/delete/:id", position_controller.deletePosition)

module.exports = router