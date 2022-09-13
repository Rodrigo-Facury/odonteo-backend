function validateLoginInfo(req, res, next) {
  try {
    const { body: { email, password } } = req;

    if (!password) {
      return res.status(400).json({ message: '"Senha" é um campo obrigatório.' })
    }

    if (!email) {
      return res.status(400).json({ message: '"Email" é um campo obrigatório.' })
    }

    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // ^ Regex extraído da seguinte fonte: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    function validatePassword(password) {
      if (password.length < 8 || password === password.toLowerCase()) {
        return false;
      }

      return true;
    }

    const validEmail = validateEmail.test(email);
    const validPassword = validatePassword(password);

    if (!validEmail || !validPassword) {
      return res.status(400).json({ message: 'Email ou Senha em formato incorreto.' })
    }

    next();

  } catch(err) {
    return next(err);
  }
}

module.exports = validateLoginInfo;
