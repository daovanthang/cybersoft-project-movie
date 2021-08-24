"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addConstraint("UserRoles", {
        fields: ["userId"],
        type: "foreign key",
        name: "custom_fkey_constraint_user",
        references: {
          //Required field
          table: "Users",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("UserRoles", {
        fields: ["roleId"],
        type: "foreign key",
        name: "custom_fkey_constraint_role",
        references: {
          //Required field
          table: "Roles",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("Tickets", {
        fields: ["userId"],
        type: "foreign key",
        name: "custom_fkey_constraint_ticket_user",
        references: {
          //Required field
          table: "Users",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("Tickets", {
        fields: ["movieId"],
        type: "foreign key",
        name: "custom_fkey_constraint_ticket_movie",
        references: {
          //Required field
          table: "Movies",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("CinemaMovies", {
        fields: ["movieId"],
        type: "foreign key",
        name: "custom_fkey_constraint_movie",
        references: {
          //Required field
          table: "Movies",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("CinemaMovies", {
        fields: ["cinemaId"],
        type: "foreign key",
        name: "custom_fkey_constraint_cinema",
        references: {
          //Required field
          table: "Cinemas",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("ShowTimes", {
        fields: ["cinemaId"],
        type: "foreign key",
        name: "custom_fkey_constraint_showtime_cinema",
        references: {
          //Required field
          table: "Cinemas",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
      queryInterface.addConstraint("Seats", {
        fields: ["showTimeId"],
        type: "foreign key",
        name: "custom_fkey_constraint_showtime",
        references: {
          //Required field
          table: "ShowTimes",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
