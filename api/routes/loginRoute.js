const express = require('express');
const login = require('../controllers/userController/login');
const validateLoginInfo = require('../middlewares/validateLoginInfo');

const router = express.Router();

router.post('/', validateLoginInfo, login);

module.exports = router;
