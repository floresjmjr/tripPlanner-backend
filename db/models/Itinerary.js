const db = require('../configuration');
const {Model, DataTypes} = require('sequelize');

class Itinerary extends Model {}

Itinerary.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Itinerary;

