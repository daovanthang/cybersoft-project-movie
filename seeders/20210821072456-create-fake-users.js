"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "customer",
          email: "customer@gmail.com",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "admin",
          email: "admin@gmail.com",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "thang",
          email: "thang@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tuan",
          email: "tuan@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "thanh",
          email: "thanh@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "cuong",
          email: "cuong@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "hoang",
          email: "hoang@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "man",
          email: "man@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tu",
          email: "tu@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
          phone: "0900",
          age: "14",
          createdAt: "2021-06-10 21:30:35",
          updatedAt: "2021-06-10 21:30:35",
        },
        {
          name: "tam",
          email: "tam@gmail.com",
          avatar: "localhost:3000/public/images/avatar/default.jpg",
          password:
            "$2a$10$tznqP7U8bHV6qci9/l9aJOmA1fbt71fnV43EY2SXMlfGT0WFgTTEW",
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
