"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "customer",
          email: "customer@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "admin",
          email: "admin@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "thang",
          email: "thang@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tuan",
          email: "tuan@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "thanh",
          email: "thanh@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "cuong",
          email: "cuong@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "hoang",
          email: "hoang@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "man",
          email: "man@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tu",
          email: "tu@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tam",
          email: "tam@gmail.com",
          password: "123",
          phone: "0900",
          age: "14",
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
