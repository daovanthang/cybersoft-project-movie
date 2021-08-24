const express = require("express");
const userRouters = express.Router();
const { User } = require("../models");
const {
  getListUsers,
  getDetailUser,
  createUser,
  removeUser,
  updateUser,
  uploadAvatar,
} = require("../controllers/user.controllers");
const { logger } = require("../middlewares/log/logger.middlewares");
const {
  checkExits,
} = require("../middlewares/validations/checkExist.middlewares");
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middlewares");
const {
  uploadImageSignle,
} = require("../middlewares/uploads/upload-image.middlewares");

userRouters.post(
  "/upload-avatar",
  authenticate,
  uploadImageSignle("avatar"),
  uploadAvatar
);
/**
 * api: lay tat ca nguoi dung
 *      url: '/api/users'
 *      method: get
 */
userRouters.get("/", logger("Lấy tất cả người dùng"), getListUsers);

/**
 * api: lay chi tiet mot nguoi dung
 *      url: '/api/users/get-detail-user/:id'
 *      method: get
 */
userRouters.get("/:id", logger("lấy chi tiết người dùng"), getDetailUser);

/**
 * api: tao moi user
 *     url: '/api/users/create-user
 *     method:post
 *     data: {email , name}
 */
userRouters.post("/", authenticate, authorize(["ADMIN"]), createUser);

userRouters.delete("/:id", checkExits(User), removeUser);

userRouters.put("/:id", checkExits(User), updateUser);

module.exports = {
  userRouters,
};
