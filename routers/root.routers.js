const express = require("express");
const { authRouter } = require("./auth.routers");
const { cinemaRouter } = require("./cinema.routers");
const { userRouters } = require("./user.routers");
const rootRouter = express.Router();

rootRouter.use("/users", userRouters);
rootRouter.use("/auth", authRouter);
rootRouter.use("/cinemas", cinemaRouter);

module.exports = {
  rootRouter,
};
