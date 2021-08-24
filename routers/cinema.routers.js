const { Router } = require("express");
const {
  getAll,
  getCinemaBycineplex,
} = require("../controllers/cinema.controller");
const cinemaRouter = Router();

cinemaRouter.get("/", getAll);
cinemaRouter.get("/bycineplex", getCinemaBycineplex);

module.exports = {
  cinemaRouter,
};
