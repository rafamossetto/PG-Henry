const { Router } = require("express");
const router = Router();
const UserCtrl = require("../../controllers/user.controller");
const PaymentCtrl = require("../../controllers/payment.controller");
const verifySignup = require("../../middlewares/verifySignup");
const verifyLogin = require("../../middlewares/verifyLogin");
const authentication = require("../../middlewares/authentication");

router.post("/signup", [verifySignup.checkEmail], UserCtrl.signUp);
router.post("/login", [verifyLogin.checkUser], UserCtrl.logIn);
router.get("/verifyadmin", [authentication.verifyToken], UserCtrl.verifyAdmin);
router.get(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.getUsers
);

router.put(
  "/bookings",
  [authentication.verifyToken],
  PaymentCtrl.updateBooking
);

router.put(
  "/:id",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.putUser
);

module.exports = router;
