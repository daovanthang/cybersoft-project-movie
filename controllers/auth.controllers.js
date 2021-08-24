const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    /**
     * 2 buoc dang nhap:
     *  1/ tim user theo email
     *  2/ so sanh password
     *
     */
    const userLogin = await User.findOne({ where: { email } });
    if (userLogin) {
      // so sanh password
      const isAuth = bcrypt.compareSync(password, userLogin.password);
      console.log(isAuth);
      if (isAuth) {
        const payload = {
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.role,
        };
        const secretKey = "haoPN";
        const token = jwt.sign(payload, secretKey, {
          expiresIn: 30 * 24 * 60 * 60,
        });
        res.status(200).send({ message: "login success", token });
      } else {
        res.status(400).send({ message: "password incorect" });
      }
    } else {
      res.status(404).send("this is function login");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const signUp = async (req, res) => {
  const { name, email, password, phone, age } = req.body;
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
      role: "CLIENT",
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { signIn, signUp };
