const router = require("express").Router();
const controller = require('../controller/index');

router.get('/getAllSubCategory', controller.getAllSubCategories);
router.post('/getSubCategoryByCategory', controller.getSubCategoriesByCategory);

module.exports = router;
