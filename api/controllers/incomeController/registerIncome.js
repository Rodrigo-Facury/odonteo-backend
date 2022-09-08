const { Income: incomeModule } = require('../../../database/models');

async function registerIncome(req, res, next) {
  try {
    const { income } = req.body;
    const stringifiedDates = JSON.stringify(income.dates);
    income.dates = stringifiedDates;

    const createdIncome = await incomeModule.create(income);

    return res.status(201).json({ createdIncome, message: 'Registro efetuado com sucesso!' });

  } catch(err) {
    return next(err);
  }
}

module.exports = registerIncome;
