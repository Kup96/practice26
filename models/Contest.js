const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contest extends Model {


    static associate(models) {
      Contest.belongsTo(models.Users, {
        foreignKey: 'userId',
        sourceKey: 'id',
      })
      Contest.hasMany(models.Offers, {
        foreignKey: 'contestId',
        targetKey: 'id',
      })
    }
  }

    Contest.init({
      id: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      userId:  DataTypes.INTEGER,
      contestType: DataTypes.ENUM('name', 'tagline', 'logo'),
      fileName: DataTypes.INTEGER,
      originalFileName: DataTypes.INTEGER ,
      title: DataTypes.INTEGER,
      typeOfName: DataTypes.INTEGER,
      industry: DataTypes.INTEGER,
      focusOfWork: DataTypes.TEXT,
      targetCustomer: DataTypes.TEXT,
      styleName: DataTypes.STRING,
      nameVenture: DataTypes.STRING,
      typeOfTagline:DataTypes.STRING,
      brandStyle: DataTypes.STRING,
      createdAt: DataTypes.STRING,
      status: DataTypes.STRING,
      prize: DataTypes.DECIMAL,
      priority: DataTypes.INTEGER,


    },

  {
    sequelize,
    modelName: "Contest",
    timestamps: false
  });

  return Contest;
};
