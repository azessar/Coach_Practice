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
    zipCode: req.body.zipCode,
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
        zipCode: user.zipCode,
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
          message: "Invalid Password!",
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
        zipCode: user.zipCode,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
