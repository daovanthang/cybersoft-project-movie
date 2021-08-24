"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cineplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema }) {
      this.hasMany(Cinema, {
        foreignKey: "cineplexId",
        as: "cinemas",
      });
    }
  }
  cineplex.init(
    {
      codeCineplex: DataTypes.STRING,
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      aliase: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cineplex",
    }
  );
  return cineplex;
};
