const express = require('express');
const getIncomeByUserId = require('../controllers/incomeController/getIncomeByUserId');
const registerIncome = require('../controllers/incomeController/registerIncome');

const router = express.Router();

router.post('/', registerIncome);

router.get('/:userId', getIncomeByUserId);

module.exports = router;
