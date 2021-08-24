"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema }) {
      this.belongsToMany(Cinema, {
        through: "CinemaMovie",
        as: "cinemas",
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      time: DataTypes.INTEGER,
      evaluate: DataTypes.INTEGER,
      poster: DataTypes.STRING,
      trailer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
