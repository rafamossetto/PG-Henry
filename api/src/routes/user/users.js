const { Router } = require("express");
const router = Router();
const UserCtrl = require("../../controllers/user.controller");

// middleware para verificar datos en el signup
const verifySignup = require("../../middlewares/verifySignup");

// middleware para chequear que al hacer el login verifique si existe el usuario con el email proporcionado y si las contraseñas matchean
const verifyLogin = require("../../middlewares/verifyLogin");

// Al hacer un post a /signup, le paso el middleware para chequear si ya existe un usuario con ese email. Entonces si existe, corta la ejecución y no deja hacer el post.
// Si no existe un usuario con ese email, me dejaria crearlo

router.post("/signup", [verifySignup.checkEmail], UserCtrl.createUser);

module.exports = router;
