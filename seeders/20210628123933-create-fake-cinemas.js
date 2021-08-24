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
      "Cinemas",
      [
        {
          name: "BHD 3/2",
          address: "150 đường 3/2 quận 10 tp Hồ Chí Minh",
          image: "link hình BHD 3/2",
          cineplexId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "BHD Hai Bà Trưng",
          address: "150 đường 3/2 quận 10 tp Hồ Chí Minh",
          image: "link hình BHD 3/2",
          cineplexId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "DDC Nguyễn Trãi",
          address: "150 đường 3/2 quận 10 tp Hồ Chí Minh",
          image: "link hình BHD 3/2",
          cineplexId: 2,
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
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
