const UserModel = require("../models/model.user");
const ValidateRegister = require("../validation/Register");
const ValidateLogin = require("../validation/Login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = async (req, res) => {
  const { errors, isValid } = ValidateRegister(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      UserModel.findOne({ email: req.body.email }).then(async (exist) => {
        if (exist) {
          errors.email = "user exist";
          res.status(404).json(errors);
        } else {
          hash = bcrypt.hashSync(req.body.password, 10);
          req.body.password = hash;
          await UserModel.create(req.body);
          res.status(200).json({ message: "success" });
        }
      });
    }
   
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const Login = async (req, res) => {
  const { errors, isValid } = ValidateLogin(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      UserModel.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          errors.email = "not found user";
          res.status(404).json(errors);
        } else {
          bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if (!isMatch) {
              errors.password = "incorrect password";
              res.status(404).json(errors);
            } else {
             var token = jwt.sign(
                {id: user._id,
                  name: user.name,
                  email: user.email, },
                process.env.PRIVATE_KEY,
                { expiresIn: "1h" }
              );
              res.status(200).json({ message:"success",token})
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = {
  Register,
  Login,

};