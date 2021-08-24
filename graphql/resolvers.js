const { User, Role, UserRole, Movie, cineplex, Cinema } = require("../models");
const { Op, Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const graphqlResolvers = {
  async user(params) {
    const { id } = params;
    try {
      const userDetail = await User.findOne({
        where: { id },
        include: [
          {
            model: Role,
            as: "roles",
            attributes: ["id", "roleName", "description"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      console.log(userDetail);
      return userDetail;
    } catch (error) {
      throw new Error(error);
    }
  },
  //getUserByEmail
  async userByEmail(params) {
    const { email } = params;
    console.log(email);
    try {
      const userDetail = await User.findOne({
        where: { id },
        include: [
          {
            model: Role,
            as: "roles",
            attributes: ["id", "roleName", "description"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      console.log(userDetail);
      return userDetail;
    } catch (error) {
      throw new Error(error);
    }
  },
  async users() {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Role,
            as: "roles",
            attributes: ["id", "roleName", "description"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return users;
    } catch (error) {
      throw new Error(error);
    }
  },
  async userWithPage(params) {
    const { page, number } = params;
    try {
      const users = await User.findAndCountAll({
        include: [{ model: Role, required: true, as: "roles" }],
        order: [["id", "ASC"]],
        limit: number,
        offset: page <= 0 ? 0 * number : (page - 1) * number,
      });
      const listUserPagination = {
        currentPage: page,
        count: number,
        totalPages: Math.ceil(users.count / number),
        totalCount: users.count,
        items: users.rows,
      };
      console.log(listUserPagination);
      return listUserPagination;
    } catch (error) {
      throw new Error(error);
    }
  },
  async createUser({ inputUser }) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(inputUser.password, salt);
      const role = await Role.findOne({
        where: { roleName: inputUser.roleName },
      });
      if (role) {
        let user = await User.create({
          ...inputUser,
          password: hashPassword,
        });
        if (user) {
          role.addUser(user);
          user["roles"] = [role];
          console.log(user);
          return user;
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeUser({ id }) {
    try {
      const user = await User.findByPk(id);
      if (user) {
        await User.destroy({
          where: {
            id,
          },
        });
        return user;
      } else {
        throw new { error: "not found" }();
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateUser({ id, inputUser }) {
    try {
      const [status] = await User.update(
        { ...inputUser },
        {
          where: {
            id,
          },
        }
      );
      if (status > 0) {
        return { id: id, status: "success" };
      } else {
        return { id: id, status: "failure" };
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  //Role
  async role(params) {
    const { id } = params;
    try {
      const roleDetail = await Role.findByPk(id);
      return roleDetail;
    } catch (error) {
      throw new Error(error);
    }
  },
  async roles() {
    try {
      const roles = await Role.findAll();
      return roles;
    } catch (error) {
      throw new Error(error);
    }
  },
  async createRole({ inputRole }) {
    try {
      const role = await Role.create({ ...inputRole });
      return role;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeRole({ id }) {
    try {
      const role = await Role.findByPk(id);
      if (role) {
        await Role.destroy({
          where: {
            id,
          },
        });
        return role;
      } else {
        throw new { error: "not found" }();
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  //Movie
  async movies() {
    try {
      const movies = await Movie.findAll();
      return movies;
    } catch (error) {
      throw new Error(error);
    }
  },
  async movie(params) {
    const { id } = params;
    try {
      const movie = await Movie.findByPk(id);
      return movie;
    } catch (error) {
      throw new Error(error);
    }
  },
  async createMovie({ inputMovie }) {
    try {
      const movie = await Movie.create({ ...inputMovie });
      return movie;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeMovie({ id }) {
    try {
      const movie = await Movie.findByPk(id);
      if (movie) {
        await movie.destroy({
          where: {
            id,
          },
        });
        return movie;
      } else {
        throw new { error: "not found" }();
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  async movieWithPage(params) {
    const { page, number } = params;
    try {
      const movies = await Movie.findAndCountAll({
        order: [["id", "ASC"]],
        limit: number,
        offset: page <= 0 ? 0 * number : (page - 1) * number,
      });
      const listMoviePagination = {
        currentPage: page,
        count: number,
        totalPages: Math.ceil(movies.count / number),
        totalCount: movies.count,
        items: movies.rows,
      };
      return listMoviePagination;
    } catch (error) {
      throw new Error(error);
    }
  },
  async movieWithPageByDay(params) {
    const { page, number, from, to, name } = params;
    try {
      const movies = await Movie.findAndCountAll({
        where: {
          [Op.and]: [
            { startDate: { [Op.gte]: from } },
            { startDate: { [Op.lte]: to } },
            { name: { [Op.like]: `%${name}%` } },
          ],
        },
        order: [["id", "ASC"]],
        limit: number,
        offset: page <= 0 ? 0 * number : (page - 1) * number,
      });
      const listMoviePagination = {
        currentPage: page,
        count: number,
        totalPages: Math.ceil(movies.count / number),
        totalCount: movies.count,
        items: movies.rows,
      };
      return listMoviePagination;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateMovie({ id, inputMovie }) {
    try {
      const [status] = await Movie.update(
        { ...inputMovie },
        {
          where: {
            id,
          },
        }
      );
      if (status > 0) {
        return { id: id, status: "success" };
      } else {
        return { id: id, status: "failure" };
      }
    } catch (error) {
      throw new Error(error);
    }
  },
  //cineplex
  async cineplexs() {
    try {
      const result = await cineplex.findAll();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
  //cinema
  async cinemas(params) {
    const { codeCineplex } = params;
    try {
      const cinemas = await Cinema.findAll({
        include: {
          model: cineplex,
          as: "cineplex",
          where: { codeCineplex },
        },
      });
      return cinemas;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = {
  graphqlResolvers,
};
