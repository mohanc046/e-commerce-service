const router = require("express").Router();
const controller = require('../controller/index');

router.get('/getAllProducts', controller.getAllProducts);
router.get('/getActiveProducts', controller.getActiveProducts);
router.post('/getProductsByCategory', controller.getProductsByCategory);
router.post('/getProductsBySubCategory', controller.getProductsBySubCategory);

module.exports = router;
