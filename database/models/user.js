const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.Income,
      { foreignKey: 'userId', as: 'income_record' });
  };

  return User;
};

module.exports = User;
