const express = require('express');
const router = express.Router();
const { addDistribution, getDistributions } = require('../controllers/distributionController');

router.post('/add', addDistribution);
router.get('/get', getDistributions);

module.exports = router;
