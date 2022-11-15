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
      gender: "Male",
      twitter: "@coachcornerteam",
      instagram: "@coachcornerteam",
      personalSite: "www.coachcorner.io",
      blurb:
        "asdf asdf asdf asdfsdklfhasdlhkj fasdkljh flkasdjhf lkasdjhf aklsdjfh lkasdjfhlk sdjfhlksdjhflkadjsfh klasdhklajdshf lksdflkasdjhf lkasdjhf laksdjhf laksdjfh lkasdjhf lkasdjhf lkasdfhlk dhslfkajhds fadsfjh aklsdjhf lkasjdhf lkjasdhfl kadhsflkadhslkasdhf lk adjshflk",
      sports: ["Basketball", "Tennis", "Pickleball"],
      experience: [
        {
          startDate: "2011-02-01",
          endDate: "2012-02-01",
          organization: "Deerfield High School",
          role: "Point Guard",
          sport: "Basketball",
          summary: "Got buckets and put the team on my back",
        },
        {
          startDate: "2012-02-01",
          endDate: "2012-06-01",
          organization: "Whatever Middle School",
          role: "Head Coach",
          sport: "Baseball",
          summary: "Coached a bunch of kids to the ship",
        },
        {
          startDate: "2019-12-01",
          endDate: "2022-02-01",
          organization: "Something High School",
          role: "Head Coach",
          sport: "Basketball",
          summary:
            "Dominated asdf asdf asdf adlkfjhasd lkjfh adslkfh adklsfhladksj flaksdjhf laksdjhf lkjadshf lasdkhf laskdjhf aklsdhf",
        },
      ],
    },
  ]);
}
