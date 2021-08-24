"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "CinemaMovies",
      [
        {
          cinemaId: 1,
          movieId: 1,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 1,
          movieId: 2,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 2,
          movieId: 3,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 2,
          movieId: 4,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 3,
          movieId: 1,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 3,
          movieId: 5,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 3,
          movieId: 6,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 3,
          movieId: 7,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 1,
          movieId: 8,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
        {
          cinemaId: 2,
          movieId: 9,
          createdAt: "2022-06-10 21:30:35",
          updatedAt: "2022-06-10 21:30:35",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
