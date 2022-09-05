const express = require('express');
const User = require('./database/models/user');
const app = express();
const PORT = process.env.PORT || 3000; 

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/users', async function (req, res) {
  const users = await User.findAll();
  res.send(JSON.stringify(users));
})

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));
