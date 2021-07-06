const { Router } = require("express");
const router = Router();
const UserCtrl = require("../../controllers/user.controller");

/*
EW1 - back end - GET user para checkear que el mail y la contrasenia coincidan
*/
router.use("/SignUp", UserCtrl.checkEmail);
router.get("/", UserCtrl.getUsers);

module.exports = router;
