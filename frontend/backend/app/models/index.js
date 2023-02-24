const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  operatorsAliases: 0,
  // dialectOptions: {
  //   // e.g. socketPath: '/cloudsql/my-awesome-project:us-central1:my-cloud-sql-instance'
  //   // same as host string above
  //   socketPath: `/cloudsql/coachcorner-networking-site:us-central1:quickstart-instance`,
  // },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
// db.userRole = require("../models/user_role.model.js")(sequelize, Sequelize);

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "role_id",
//   otherKey: "user_id",
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "user_id",
//   otherKey: "role_id",
// });

db.ROLES = ["user", "moderator", "admin"];
module.exports = db;
