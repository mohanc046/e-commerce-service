const router = require("express").Router();
const controller = require('../controller/index');

router.get('/getProductVariantsByProductId', controller.getProductVariantsByProductId);
router.post('/getActiveProductVariantsByProductId', controller.getActiveProductVariantsByProductId);

module.exports = router;
