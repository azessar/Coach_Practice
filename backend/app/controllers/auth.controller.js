const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email,
    sports: req.body.sports,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      // user role = 1
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 8640000, // 2400 hours
      });
      res.status(200).send({
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        email: user.email,
        sports: user.sports,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid password!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 8640000, // 2400 hours
      });
      res.status(200).send({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.changePassword = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      var passwordIsValid = bcrypt.compareSync(
        req.body.previousPassword,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid password!",
        });
      }
      const { newPassword, confirmPassword } = req.body;

      if (newPassword.length < 7) {
        res.status(400).send({
          message: "Password must be at least 7 characters!",
        });
        return;
      }
      if (newPassword != confirmPassword) {
        res.status(400).send({
          message: "Password and Confirm Password must match!",
        });
        return;
      }
      User.update(
        {
          password: bcrypt.hashSync(req.body.newPassword, 8),
        },
        { where: { email: req.body.email } }
      )
        .then(() => {
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 8640000, // 2400 hours
          });
          res.status(200).send({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            city: user.city,
            accessToken: token,
          });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
