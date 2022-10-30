module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    twitter: {
      type: Sequelize.STRING,
    },
    instagram: {
      type: Sequelize.STRING,
    },
    blurb: {
      type: Sequelize.TEXT,
    },
    sports: {
      type: Sequelize.JSON, //array of strings
    },
    experience: {
      type: Sequelize.JSON, //array of objects consisting of start year, end year, organization, role, optional summary
    },
  });
  return User;
};
