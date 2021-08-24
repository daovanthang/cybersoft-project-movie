"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Seat }) {
      this.belongsTo(Cinema, { foreignKey: "cinemaId", as: "cinema" });
      this.hasMany(Seat, { foreignKey: "showTimeId", as: "seats" });

      // define association here
    }
  }
  ShowTime.init(
    {
      startTime: DataTypes.DATE,
      cinemaId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ShowTime",
    }
  );
  return ShowTime;
};
