const { DATE } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    trip_budget: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references the `Traveller` model's `id` field (`Traveller.id`)
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references the `Location` model's `id` field (`Location.id`)
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    underscored: false,
    freezeTableName: true,
    modelName: "trip",
  }
);

module.exports = Trip;
