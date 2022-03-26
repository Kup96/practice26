const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {


    static associate(models) {
      Rating.belongsTo(models.User, {
        foreignKey: 'userId',
        sourceKet: 'id',
      })
      Rating.belongsTo(models.Offers, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })

    }
  }

    Rating.init({
    offerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    mark: DataTypes.FLOAT,

    },

    {
      sequelize,
      modelName: "Rating",
      timestamps: false
    });

  return Rating;
};
