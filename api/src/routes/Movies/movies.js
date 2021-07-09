const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");
const authentication = require("../../middlewares/authentication");

const router = Router();

router.get("/:id", movieCtrl.getMovieById);
router.get("/", movieCtrl.getMovies);
router.post(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  movieCtrl.postMovie
);
router.put(
  "/:id",
  [authentication.verifyToken, authentication.isAdmin],
  movieCtrl.putMovie
);



module.exports = router;
