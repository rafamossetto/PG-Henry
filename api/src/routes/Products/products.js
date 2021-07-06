const { Router } = require("express");
const productCtrl = require("../../controllers/product.controller");
const router = Router();

router.get("/", productCtrl.getProducts);

router.post("/", productCtrl.addProduct);

module.exports = router;
