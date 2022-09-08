const { Income: incomeModule } = require('../../../database/models');

async function getIncomeByUserId(req, res, next) {
  try {
    const { params: { userId } } = req;

    const income = await incomeModule.findAll({
      where: {
        userId
      },
      attributes: ['dates', 'installmentValue']
    });

    return res.status(200).json({ income });

  } catch(err) {
    return next(err);
  }
}

module.exports = getIncomeByUserId;
