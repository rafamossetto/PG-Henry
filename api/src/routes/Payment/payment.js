const { Router } = require("express");
const router = Router();
const paymentCtrl = require("../../controllers/payment.controller");

router.post("/", paymentCtrl.processPayment);

module.exports = router;
