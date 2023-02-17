const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "https://coachcornermain.uk.r.appspot.com:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

app.use('/images', express.static('./images'))

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
