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

    let correctPassword;

    if (user[0]) {
      correctPassword = await bcrypt.compare(password, user[0].password);
  
      delete user[0].dataValues.password;
    }
    
    
    if (!correctPassword) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
    }

    return res.status(200).json({ user: user[0], message: 'Login efetuado com sucesso!' });

  } catch(err) {
    return next(err);
  }
}

module.exports = login;
