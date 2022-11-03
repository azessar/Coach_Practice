const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUserProfile = (req, res) => {
  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// exports.editProfile = (req, res) => {
//   // Save User to Database
//   User.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     zipCode: req.body.zipCode,
//     email: req.body.email,
//     sports: req.body.sports,
//     password: bcrypt.hashSync(req.body.password, 8),
//   })
//     .then((user) => {
//       // user role = 1
//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400, // 24 hours
//       });
//       res.status(200).send({
//         firstName: user.firstName,
//         lastName: user.lastName,
//         zipCode: user.zipCode,
//         email: user.email,
//         sports: user.sports,
//         accessToken: token,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
// };
