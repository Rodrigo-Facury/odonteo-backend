const express = require('express');
const loginRoute = require('./api/routes/loginRoute');
const incomeRoutes = require('./api/routes/incomeRoutes');
const errorHandler = require('./api/middlewares/errorHandler');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRoute);

app.use('/income', incomeRoutes);

app.use(errorHandler);

module.exports = app;
