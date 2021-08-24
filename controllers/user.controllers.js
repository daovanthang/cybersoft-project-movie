const { User } = require("../models");
const bcrypt = require("bcrypt");

const getListUsers = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDetail = await User.findByPk(id);
    if (userDetail) {
      res.status(200).send(userDetail);
    } else {
      res.status(400).send("not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, phone, age, role } = req.body;
  try {
    //tao ra mot chuoi ngau nhien
    const salt = bcrypt.genSaltSync(10);
    // ma hoa password + salt
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
      age,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }

  // const user = {...req.body,id:(parseInt(userList[userList.length-1].id)+1).toString()};
  // const newUser = {
  //   id: (parseInt(userList[userList.length - 1].id) + 1).toString(),
  //   name,
  //   email,
  // };
  // userList = [...userList, newUser];
  // console.log(userList);
  // res.send(newUser);
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xoa thanh cong");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phone, age, role } = req.body;
  try {
    const [countUpdate] = await User.update(
      { name, email, password, phone, age, role },
      {
        where: {
          id,
        },
      }
    );
    if (countUpdate > 0) {
      res.status(200).send("update success");
    } else {
      res.status(404).send("not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file, tokenDecode } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  try {
    const userDetail = await User.findByPk(tokenDecode.id);
    userDetail.avatar = urlImage;
    await userDetail.save();
    res.send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListUsers,
  getDetailUser,
  createUser,
  removeUser,
  updateUser,
  uploadAvatar,
};
