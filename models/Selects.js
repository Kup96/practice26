const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SelectBox extends Model {


    static associate(models) {
      SelectBox.belongsTo(models.User, {
        foreignKey: 'userId',
        sourceKet: 'id',
      })
      SelectBox.belongsTo(models.Offers, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })

    }
  }

  SelectBox.init({
    type: DataTypes.STRING,
    describe: DataTypes.STRING,

    },

    {
      sequelize,
      modelName: "SelectBox",
      timestamps: false
    });

  return SelectBox;
};
