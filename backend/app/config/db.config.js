module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Akz-3908",
  DB: "coach_test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// module.exports = {
//   HOST: `/cloudsql/coachcorner-networking-site:us-central1:quickstart-instance`,
//   USER: "quickstart-user",
//   PASSWORD: "C@achC@rner!",
//   DB: "quickstart_db",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
