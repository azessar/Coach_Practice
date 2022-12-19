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
      city: "Chicago, IL",
      email: "jordan@blah.blah",
      gender: "Male",
      twitter: "@coachcornerteam",
      instagram: "@coachcornerteam",
      personalSite: "www.coachcorner.io",
      blurb:
        "asdf asdf asdf asdfsdklfhasdlhkj fasdkljh flkasdjhf lkasdjhf aklsdjfh lkasdjfhlk sdjfhlksdjhflkadjsfh klasdhklajdshf lksdflkasdjhf lkasdjhf laksdjhf laksdjfh lkasdjhf lkasdjhf lkasdfhlk dhslfkajhds fadsfjh aklsdjhf lkasjdhf lkjasdhfl kadhsflkadhslkasdhf lk adjshflk",
      // sports: ["Basketball", "Tennis", "Pickleball"],
      firstSport: 'Basketball',
      secondSport: 'Tennis',
      thirdSport: 'Pickleball',
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

    {
      id: 2,
      firstName: "Andrew",
      lastName: "Zessar",
      password: bcrypt.hashSync("aaaaaaaa", 8),
      city: "Chicago, IL",
      email: "andrew@blah.blah",
      gender: "Male",
      twitter: "@coachcornerteam",
      instagram: "@coachcornerteam",
      personalSite: "www.coachcorner.io",
      blurb:
        "df sadf2345 2345 2345234lk5h234lk 5h23lk45 h2l3k4 h52lk34 h5jk234h5 l2k34hk",
      firstSport: "Baseball",
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

    {
      id: 3,
      firstName: "Phil",
      lastName: "Jackson",
      password: bcrypt.hashSync("aaaaaaaa", 8),
      city: "Chicago, IL",
      email: "phil@blah.blah",
      gender: "Male",
      twitter: "@coachcornerteam",
      instagram: "@coachcornerteam",
      personalSite: "www.coachcorner.io",
      blurb:
        "df sadf2345 2345 2345234lk5h234lk 5h23lk45 h2l3k4 h52lk34 h5jk234h5 l2k34hk",
        firstSport: "Basketball",
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
