const db = require("./app/models");
const Role = db.role;
const User = db.user;

var bcrypt = require("bcryptjs");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

async function initial() {
  await Role.create({
    id: 1,
    name: "user",
  });

  await Role.create({
    id: 2,
    name: "moderator",
  });

  await Role.create({
    id: 3,
    name: "admin",
  });

  await User.bulkCreate([
    {
      id: 1,
      firstName: "Jordan",
      lastName: "Leonard",
      password: bcrypt.hashSync("aaaaaaaa", 8),
      zipCode: "60610",
      email: "jordan@blah.blah",
      twitter: "@coachcornerteam",
      instagram: "@coachcornerteam",
      blurb:
        "asdf asdf asdf asdfsdklfhasdlhkj fasdkljh flkasdjhf lkasdjhf aklsdjfh lkasdjfhlk sdjfhlksdjhflkadjsfh klasdhklajdshf lksdflkasdjhf lkasdjhf laksdjhf laksdjfh lkasdjhf lkasdjhf lkasdfhlk dhslfkajhds fadsfjh aklsdjhf lkasjdhf lkjasdhfl kadhsflkadhslkasdhf lk adjshflk",
      sports: ["Basketball", "Tennis", "Pickleball"],
    },
  ]);
}
