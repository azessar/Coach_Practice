const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const sequelize = require("sequelize");

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
    where: { id: req.body.id },
  })
    .then((user) => {
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 8640000, // 2400 hours
      });
      let tempUser = user;
      tempUser.accessToken = token
      // res.status(200).send(
      //   user
      // );
      res.status(200).send({...user, accessToken: token});
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
          firstSport: req.body.sports[0],
          secondSport: req.body.sports[1] || null,
          thirdSport: req.body.sports[2] || null,
        },
        { where: { email: req.body.previousEmail } }
      )
        .then(() => {
          var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 8640000, // 2400 hours
          });
          let tempUser = user;
          tempUser.accessToken = token
          res.status(200).send({...user, accessToken: token,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.newEmail,
            city: req.body.city,
            sports: req.body.sports
          });
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
      
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    })
};

exports.getCoaches = (req, res) => {
  if (req.body.name === '') {
    User.findAll({
      where: {
        [Op.or]: [
          {
            city: req.body.city,
          },
          {
            firstSport: req.body.sport,
          },
          {
            secondSport: req.body.sport,
          },
          {
            thirdSport: req.body.sport,
          },
        ],
      },
    })
      .then((coaches) => {
        res.status(200).send(coaches);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    User.findAll({
      where: {
        [Op.or]: [
          {
            firstName: {
              [Op.substring]: req.body.name,
            },
          },
          {
            lastName: {
              [Op.substring]: req.body.name,
            },
          },
          {
            city: req.body.city,
          },
          {
            firstSport: req.body.sport,
          },
          {
            secondSport: req.body.sport,
          },
          {
            thirdSport: req.body.sport,
          },
        ],
      },
    })
      .then((coaches) => {
        res.status(200).send(coaches);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  }
  
};
