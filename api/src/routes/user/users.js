const { Router } = require("express");
const router = Router();
const UserCtrl = require("../../controllers/user.controller");

// middleware para verificar datos en el signup
const verifySignup = require("../../middlewares/verifySignup");

// middleware para chequear que al hacer el login verifique si existe el usuario con el email proporcionado y si las contraseñas matchean
const verifyLogin = require("../../middlewares/verifyLogin");

// middleware para verificar que me pasen un token por header
const authentication = require("../../middlewares/authentication");

// Al hacer un post a /signup, le paso el middleware para chequear si ya existe un usuario con ese email. Entonces si existe, corta la ejecución y no deja hacer el post.
// Si no existe un usuario con ese email, me dejaria crearlo

router.post("/signup", [verifySignup.checkEmail], UserCtrl.signUp);
router.post("/login", [verifyLogin.checkUser], UserCtrl.logIn);
router.get("/verifyadmin", [authentication.verifyToken], UserCtrl.verifyAdmin);
router.get("/",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.getUsers
);
router.put("/:id", 
  [authentication.verifyToken, authentication.isAdmin], 
  UserCtrl.putUser);

module.exports = router;
