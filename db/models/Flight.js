const db = require('../configuration');
const {Model, DataTypes} = require('sequelize');

class Flight extends Model {}

Flight.init(
  {
    flightAirlineNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    timestamps: false,
  }
);

module.exports = Flight;

