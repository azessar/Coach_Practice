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

exports.editProfileBlurb = (req, res) => {
  User.update({ blurb: req.body.blurb }, { where: { email: req.body.email } })
    .then(() => {
      res.status(200).send({
        message: "About section updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.editExperienceSection = (req, res) => {
  User.update(
    { experience: req.body.experience },
    { where: { email: req.body.email } }
  )
    .then(() => {
      res.status(200).send({
        message: "Experience section updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.editContactsSection = (req, res) => {
  User.update(
    {
      twitter: req.body.newContacts.twitter,
      instagram: req.body.newContacts.instagram,
      personalSite: req.body.newContacts.personalSite,
      linkedIn: req.body.newContacts.linkedIn,
    },
    { where: { email: req.body.email } }
  )
    .then(() => {
      res.status(200).send({
        message: "Contacts section updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.editAccountInfo = (req, res) => {
  User.findOne({
    where: {
      email: req.body.previousEmail,
    },
  })
    .then((user) => {
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid password!",
        });
      }
      User.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          gender: req.body.gender,
          email: req.body.newEmail,
          city: req.body.city,
          sports: req.body.sports,
        },
        { where: { email: req.body.previousEmail } }
      )
        .then(() => {
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 8640000, // 2400 hours
          });
          res.status(200).send({
            id: user.id,
            email: req.body.newEmail,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
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
