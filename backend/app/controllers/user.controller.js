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
