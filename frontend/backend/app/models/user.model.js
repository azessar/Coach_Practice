module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
  },
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
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Not a valid email address.'
        }
     
      },
      unique: {
          args: true,
          msg: 'Email address already in use!'
      }
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
    linkedIn: {
      type: Sequelize.STRING,
    },
    personalSite: {
      type: Sequelize.STRING,
    },
    blurb: {
      type: Sequelize.TEXT,
    },
    firstSport: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    secondSport: {
      type: Sequelize.STRING,
    },
    thirdSport: {
      type: Sequelize.STRING,
    },
    profileImage: {
      type: Sequelize.STRING,
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
