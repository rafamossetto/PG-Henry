const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");

const router = Router();
const authentication = require("../../middlewares/authentication");

router.get("/:id", movieCtrl.getMovieById);
router.get("/", movieCtrl.getMovie);
router.post("/", [authentication.verifyToken, authentication.isAdmin], movieCtrl.postMovie);
router.put("/:id", [authentication.verifyToken, authentication.isAdmin], movieCtrl.putMovie);

module.exports = router;
