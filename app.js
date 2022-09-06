const express = require('express');
const loginRoute = require('./api/routes/loginRoute');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

module.exports = app;
