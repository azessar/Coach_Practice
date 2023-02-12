const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Email is already in use!",
      });
      return;
    }
    next();
  });
};

const checkNoBlanks = (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword, city } =
    req.body;
  const data = [firstName, lastName, email, password, confirmPassword, city];
  for (let i = 0; i < data.length; i++) {
    if (data[i].length === 0) {
      res.status(400).send({
        message: "All fields must be filled!",
      });
      return;
    }
  }
  next();
};

const checkValidEmail = (req, res, next) => {
  const { email } = req.body;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(validRegex)) {
    res.status(400).send({
      message: "Please enter a valid email!",
    });
    return;
  }
  next();
};

const checkPasswordLength = (req, res, next) => {
  // const { password } = req.body;
  const password = req.body.password || req.body.newPassword;

  if (password.length < 7) {
    res.status(400).send({
      message: "Password must be at least 7 characters!",
    });
    return;
  }
  next();
};

const checkConfirmPassword = (req, res, next) => {
  const { password, confirmPassword } = req.body;
  if (password != confirmPassword) {
    res.status(400).send({
      message: "Password and Confirm Password must match!",
    });
    return;
  }
  next();
};

const checkConfirmPasswordForNewPassword = (req, res, next) => {
  const { newPassword, confirmPassword } = req.body;
  if (newPassword != confirmPassword) {
    res.status(400).send({
      message: "Password and Confirm Password must match!",
    });
    return;
  }
  next();
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkNoBlanks: checkNoBlanks,
  checkValidEmail: checkValidEmail,
  checkPasswordLength: checkPasswordLength,
  checkConfirmPassword: checkConfirmPassword,
  checkRolesExisted: checkRolesExisted,
  checkConfirmPasswordForNewPassword: checkConfirmPasswordForNewPassword,
};
module.exports = verifySignUp;
