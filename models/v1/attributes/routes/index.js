const router = require("express").Router();
const controller = require('../controller/index');

router.get('/getAllAttributes', controller.getAllAttributes);
router.post('/getActiveAttributes', controller.getActiveAttributes);
router.post('/getAttributeValuesByAttributeId', controller.getAttributeValuesByAttributeId);
router.post('/getAllAttributeValuesByAttributes', controller.getAllAttributeValuesByAttributes);

module.exports = router;
