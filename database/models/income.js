const Income = (sequelize, DataTypes) => {
  const Income = sequelize.define("Income", {
    dates: DataTypes.STRING,
    installmentValues: DataTypes.DECIMAL,
  }, {
    underscored: true
  });

  return Income;
};

module.exports = Income;
