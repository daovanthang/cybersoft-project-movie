"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cineplex, Movie, ShowTime }) {
      this.belongsToMany(Movie, {
        through: "CinemaMovie",
        as: "movies",
        foreignKey: "cinemaId",
      });
      this.belongsTo(cineplex, { foreignKey: "cineplexId", as: "cineplex" });
      this.hasMany(ShowTime, { foreignKey: "cinemaId", as: "showtimes" });
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
