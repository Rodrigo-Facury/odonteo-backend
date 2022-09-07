const express = require('express');
const registerIncome = require('../controllers/incomeController/registerIncome');

const router = express.Router();

router.post('/', registerIncome);

module.exports = router;
