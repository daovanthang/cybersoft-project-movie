const express = require("express");
const movieRouters = express.Router();
const { uploadPoster } = require("../controllers/movie.controllers");
const {
  authenticate,
} = require("../middlewares/auth/verify-token.middlewares");
const {
  uploadImageSignle,
} = require("../middlewares/uploads/upload-image.middlewares");
movieRouters.post(
  "/upload-poster",
  authenticate,
  uploadImageSignle("poster"),
  uploadPoster
);
module.exports = {
  movieRouters,
};
