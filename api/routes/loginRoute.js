const express = require('express');

const router = express.Router();

router.post('/', (_req, res) => res.send('login'));

module.exports = router;