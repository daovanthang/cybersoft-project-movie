const jwt = require("jsonwebtoken");

//kiem tra nguoi dung dang nhap hay chua
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "haoPN");
    req.tokenDecode = decode;
    next();
  } catch (error) {
    res.status(401).send("ban chua dang nhap");
  }
};

//phân quyền
//userTypeArray = ["ADMIN","CLIENT"]
//1. "admin" --> "admin" = user.userType ==> next()
//1. "client" --> "client" = user.userType ==> next()
const authorize = (userTypeArray) => {
  return (req, res, next) => {
    const { tokenDecode } = req;
    const dk =
      userTypeArray.findIndex((type) => {
        return type === tokenDecode.role;
      }) > -1;
    if (dk) {
      return next();
    } else {
      res
        .status(403)
        .send({ message: "Bạn đã đăng nhập , nhưng không đủ quyền" });
    }
  };
};

module.exports = {
  authenticate,
  authorize,
};
