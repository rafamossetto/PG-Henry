const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");

const router = Router();

router.get("/", movieCtrl.getMovieById);

module.exports = router;
