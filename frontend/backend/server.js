const express = require("express");
const path = require('path');
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "https://coachcornermain.uk.r.appspot.com:3000",
  // NICK_NOTE: Dev URL = "http://localhost:3000"
};
app.use(express.static(path.join(__dirname,"..", "build")));
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

app.use('/images', express.static('./images'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
const PORT = 8080;
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}.`);
});
