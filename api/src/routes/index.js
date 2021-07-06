const { Router } = require("express");
const router = Router();
const ProductRoutes = require("./Products/products");
const UserRoutes = require("./user/users");
const MoviesRoutes = require("./Movies/movies");

router.use("/users", UserRoutes);
router.use("/products", ProductRoutes);
router.use("/movies", MoviesRoutes);

module.exports = router;
