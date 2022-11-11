const express = require("express")
const router = express.Router()

const user_controller = require("../controllers/user_controller")

router.post("/add", user_controller.addUser)
router.get("/get", user_controller.getUser)
router.get("/get/:id", user_controller.getUserById)
router.put("/update/:id", user_controller.updateUser)
router.delete("/delete/:id", user_controller.deleteUser)
router.post("/login", user_controller.login)

module.exports = router