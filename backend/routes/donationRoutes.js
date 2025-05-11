const express = require('express');
const router = express.Router();
const { createDonation, getDonations } = require('../controllers/donationController');

router.post('/create', createDonation);
router.get('/get', getDonations);

module.exports = router;
