const bcrypt = require('bcrypt');
const { User: userModule } = require('../../../database/models');

async function login(req, res, next) {
  try {
    const { body: { email, password } } = req;
    
    const user = await userModule.findAll({
      where: {
        email
      }
    });
    
    const correctPassword = await bcrypt.compare(password, user.password);

    delete user['password'];
    
    if (user.length === 0 || !correctPassword) {
      return res.status(404).json({ message: 'Usuário ou senha incorretos.' });
    }

    return res.status(200).json({ user, message: 'Login efetuado com sucesso!' });

  } catch(err) {
    return next(err);
  }
}

module.exports = login;
