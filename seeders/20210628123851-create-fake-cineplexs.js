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
      "Cineplexes",
      [
        {
          codeCineplex: "BHDStar",
          name: "BHD Star Cineplex",
          aliase: "bhd-star-cineplex",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          codeCineplex: "CGV",
          name: "cgv",
          aliase: "cgv",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          codeCineplex: "CineStar",
          name: "CineStar",
          aliase: "cineStar",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          codeCineplex: "Galaxy",
          name: "Galaxy Cinema",
          aliase: "galaxy-cinema",
          logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
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
    await queryInterface.bulkDelete("Cineplexes", null, {});
  },
};
