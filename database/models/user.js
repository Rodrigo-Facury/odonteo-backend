const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    underscored: true
  });

  User.associate = (models) => {
    User.hasMany(models.Income,
      { foreignKey: 'user_id', as: 'income_record' });
  };

  return User;
};

module.exports = User;
