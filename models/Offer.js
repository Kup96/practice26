const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {


    static associate(models) {
      Offer.belongsTo(models.Users, {
        foreignKey: 'userId',
        sourceKet: 'id',
      })
      Offer.belongsTo(models.Contest, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })
      Offer.hasOne(models.Ratings, {
        foreignKey: 'offerId',
        targetKey: 'id',
      })
    }
  }

    Contest.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    contestId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    fileName: DataTypes.STRING,
    originalFileName: DataTypes.STRING,
    status: DataTypes.STRING,

    },

    {
      sequelize,
      modelName: "Offers",
      timestamps: false
    });
  

  Offer.associate = function (models) {
    Offer.belongsTo(models.User, { foreignKey: 'user_id', sourceKey: 'id' });
  };

  Offer.associate = function (models) {
    Offer.belongsTo(models.Contest,
      { foreignKey: 'contest_id', sourceKey: 'id' });
  };

  return Offer;
};
