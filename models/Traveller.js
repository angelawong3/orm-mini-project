const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveller extends Model {}

Traveller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: false,
    freezeTableName: true,
    modelName: "traveller",
  }
);

module.exports = Traveller;
