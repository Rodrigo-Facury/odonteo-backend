const express = require('express');
const getIncomeByUserId = require('../controllers/incomeController/getIncomeByUserId');
const registerIncome = require('../controllers/incomeController/registerIncome');
const validateToken = require('../middlewares/validateToken');
const validateUserId = require('../middlewares/validateUserId');

const router = express.Router();

router.post('/', validateToken, registerIncome);

router.get('/:userId', validateUserId, validateToken, getIncomeByUserId);

module.exports = router;
