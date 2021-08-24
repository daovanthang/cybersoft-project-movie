const express = require("express");
const { authRouter } = require("./auth.routers");
const { cinemaRouter } = require("./cinema.routers");
const { userRouters } = require("./user.routers");
const { movieRouters } = require("./movie.routers");
const rootRouter = express.Router();

rootRouter.use("/users", userRouters);
rootRouter.use("/auth", authRouter);
rootRouter.use("/cinemas", cinemaRouter);
rootRouter.use("/movies", movieRouters);

module.exports = {
  rootRouter,
};
