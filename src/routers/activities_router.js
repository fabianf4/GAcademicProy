const express = require('express');
const router = express.Router();

const activities_controller = require('../controllers/activities_controller');

router.post('/add', activities_controller.addActivity);
router.get('/get', activities_controller.getActivity);
router.get('/get/:id', activities_controller.getActivityById);
router.put('/update/:id', activities_controller.updateActivity);
router.delete('/delete/:id', activities_controller.deleteActivity);

module.exports = router;