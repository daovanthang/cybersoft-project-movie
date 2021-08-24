"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Seat }) {
      this.belongsTo(Seat, { foreignKey: "showTimeId", as: "Seat" });

      // define association here
    }
  }
  Seat.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.TINYINT,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
      showTimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
