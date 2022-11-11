const express = require('express');
const router = express.Router();

const matter_controller = require("../controllers/matter_controller");

router.post("/add", matter_controller.addMatter)
router.get("/get", matter_controller.getMatter)
router.get("/get/:id", matter_controller.getMatterById)
router.put("/update/:id", matter_controller.updateMatter)
router.delete("/delete/:id", matter_controller.deleteMatter)

module.exports = router;