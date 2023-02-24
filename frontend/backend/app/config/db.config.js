module.exports = {
  HOST: "/cloudsql/coachcornermain:us-central1:coach-corner-sandbox",
  USER: "root",
  PASSWORD: "C@achC@rner!",
  DB: "coach-corner-database-1",
  dialect: "mysql",
  dialectOptions: {
    socketPath: `/cloudsql/coachcornermain:us-central1:coach-corner-sandbox`,
  },
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
