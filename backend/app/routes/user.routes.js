const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.post(
    "/api/user-profile",
    [authJwt.verifyToken],
    controller.getUserProfile
  );
  app.put(
    "/api/user-profile-blurb",
    [authJwt.verifyToken],
    controller.editProfileBlurb
  );
  app.put(
    "/api/user-profile-experience",
    [authJwt.verifyToken],
    controller.editExperienceSection
  );
  app.put(
    "/api/user-profile-contacts",
    [authJwt.verifyToken],
    controller.editContactsSection
  );
  app.put(
    "/api/user-account",
    [authJwt.verifyToken],
    controller.editAccountInfo
  );
  app.post("/api/search-coaches", controller.getCoaches);
};
