const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {


    static associate(models) {
      User.hasMany(models.Ofers, {
        foreignKey: 'userId',
        targetKey: 'id',
      })
      User.hasMany(models.Contests, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })
      User.hasMany(models.Ratings, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })
    }
  }


  User.init({
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role: DataTypes.ENUM('customer', 'creator'),
    balance: DataTypes.DECIMAL,
    accessToken: DataTypes.TEXT,
    rating: DataTypes.FLOAT,


    },

    {
      sequelize,
      modelName: "User",
      timestamps: false
    });


  User.associate = function (models) {
    User.hasMany(models.Order, { foreignKey: 'user_id', targetKey: 'id' });
  };

  User.associate = function (models) {
    User.hasMany(models.Participant,
      { foreignKey: 'user_id', targetKey: 'id' });
  };

  User.associate = function (models) {
    User.hasMany(models.Offer, { foreignKey: 'user_id', targetKey: 'id' });
  };

  User.associate = function (models) {
    User.hasMany(models.RefreshToken,
      { foreignKey: 'user_id', targetKey: 'id' });
  };

  return User;
};
