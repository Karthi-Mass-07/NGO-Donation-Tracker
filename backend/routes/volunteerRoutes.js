const express = require('express');
const router = express.Router();
const { addVolunteer, getVolunteers } = require('../controllers/volunteerController');

router.post('/add', addVolunteer);
router.get('/get', getVolunteers);

module.exports = router;
