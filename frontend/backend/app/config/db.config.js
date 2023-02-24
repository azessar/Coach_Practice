// NICK_NOTE=Prod DB
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

/*
NICK_NOTE=Local DB
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Akz-3908",
  DB: "coach_corner_test",
  dialect: "mysql",
  dialectOptions: {},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
*/
