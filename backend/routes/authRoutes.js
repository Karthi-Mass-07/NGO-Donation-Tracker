const express = require('express');
const router = express.Router();
const { register, login, getAllUser } = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.get('/get', getAllUser)

module.exports = router;
