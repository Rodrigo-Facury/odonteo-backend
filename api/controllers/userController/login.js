const bcrypt = require('bcrypt');
const { User: userModule } = require('../../../database/models');

async function login(req, res, next) {
  try {
    const { body: { email, password } } = req;
    // const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password);

    const user = await userModule.findAll({
      where: {
        email,
        password: hashedPassword
      },
      attributes: ['id', 'username', 'email']
    });

    if (user.length === 0) {
      return res.status(404).json({ message: 'Usuário ou senha incorretos.' });
    }

    return res.status(200).json({ user, message: 'Login efetuado com sucesso!' });

  } catch(err) {
    return next(err);
  }
}

module.exports = login;
