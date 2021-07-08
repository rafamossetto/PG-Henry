const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");

const router = Router();

router.get("/:id", movieCtrl.getMovieById);
router.get("/", movieCtrl.getMovie);
router.post("/", movieCtrl.postMovie);
router.put("/:id", movieCtrl.putMovie);

module.exports = router;
