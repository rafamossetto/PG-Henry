const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");

const router = Router();

router.get("/", movieCtrl.getMovieById);
router.get("/", movieCtrl.getMovie)

module.exports = router;
