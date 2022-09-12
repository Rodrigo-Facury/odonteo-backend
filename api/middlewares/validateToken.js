const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
const { SECRET } = process.env;

async function validateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Usuário não autorizado.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const foundUser = await User.findAll({ where: { email: decoded.email } });

    if (!foundUser[0]) {
      return res.status(403).json({ message: 'Usuário não encontrado.' });
    }

    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};

module.exports = validateToken;
