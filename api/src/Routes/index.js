const {Router} = require('express');
const router = Router();
const {checkEmail} = require('../Controllers/get.js')

router.use('/SignUp', checkEmail)




module.exports = router;