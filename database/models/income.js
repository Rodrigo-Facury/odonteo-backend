const Income = (sequelize, DataTypes) => {
  const Income = sequelize.define("Income", {
    dates: DataTypes.STRING,
    installmentValue: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  }, {
    underscored: true
  });

  return Income;
};

module.exports = Income;
