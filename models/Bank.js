const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Banks extends Model {

    static associate(models) {
// У банков нет ассоциаций как я понял
  }
  }
    Banks.init({
      cardNumber: DataTypes.STRING,
      name: DataTypes.STRING,
      expiry: DataTypes.STRING,
      cvc: DataTypes.STRING,
      balance: DataTypes.DECIMAL,
    },
{
    sequelize,
    modelName: 'Banks',
    timestamps: false
  });
  return Banks;
};
