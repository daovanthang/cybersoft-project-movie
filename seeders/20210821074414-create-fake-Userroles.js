"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UserRoles",
      [
        {
          userId: 1,
          roleId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 2,
          roleId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 3,
          roleId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 4,
          roleId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 5,
          roleId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 6,
          roleId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 7,
          roleId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 8,
          roleId: 1,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 9,
          roleId: 2,
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          userId: 10,
          roleId: 1,
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
  },
};
