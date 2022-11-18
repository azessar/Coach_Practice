module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        customValidator(value) {
          if (value.length > 20) {
            throw new Error("First name must be 20 characters or fewer.");
          }
        },
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        customValidator(value) {
          if (value.length > 20) {
            throw new Error("Last name must be 20 characters or fewer.");
          }
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipCode: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        customValidator(value) {
          if (value.length > 5) {
            throw new Error("Please enter a valid 5 digit US zip code.");
          }
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
    },
    twitter: {
      type: Sequelize.STRING,
    },
    instagram: {
      type: Sequelize.STRING,
    },
    personalSite: {
      type: Sequelize.STRING,
    },
    blurb: {
      type: Sequelize.TEXT,
    },
    sports: {
      type: Sequelize.JSON, //array of strings
    },
    experience: {
      type: Sequelize.JSON, //array of objects consisting of sport, startDate, endDate, organization, role, optional summary
      validate: {
        customValidator(value) {
          if (value.length > 100) {
            throw new Error("Please highlight fewer than 100 experiences.");
          }
        },
      },
    },
  });
  return User;
};
