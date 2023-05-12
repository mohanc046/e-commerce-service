const router = require("express").Router();
const controller = require('../controller/index');

router.get('/getAllCategory', controller.getAllCategories);
router.post('/getCatagoryBySlug', controller.getCategoriesBySlug);

module.exports = router;
