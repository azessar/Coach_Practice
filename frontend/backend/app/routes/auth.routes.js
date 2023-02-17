const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const { authJwt } = require("../middleware");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkNoBlanks,
      verifySignUp.checkPasswordLength,
      verifySignUp.checkValidEmail,
      verifySignUp.checkConfirmPassword,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  app.post("/api/auth/login", controller.login);

  app.put(
    "/api/user-password",
    [authJwt.verifyToken],
    controller.changePassword
  );
};