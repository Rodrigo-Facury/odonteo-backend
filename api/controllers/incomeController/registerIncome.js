const { Income: incomeModule } = require('../../../database/models');

async function registerIncome(req, res, next) {
  try {
    const { income } = req.body;
    const stringigiedDates = JSON.stringify(income.dates);
    income.dates = stringigiedDates;
    const createdIncome = await incomeModule.create(income);

    return res.status(201).json(createdIncome);

  } catch(err) {
    next(err);
  }
}

module.exports = registerIncome;