const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImageSignle = (type) => {
  //tạo đường dẫn thư mục
  mkdirp.sync(`./public/images/${type}`);
  //setup đường dẫn lưu file
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // Đường dẫn lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // thiết lập têt file
    },
  });

  const upload = multer({
    storage,
  });
  return upload.single(type);
};

module.exports = {
  uploadImageSignle,
};
