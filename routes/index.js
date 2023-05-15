
module.exports = app => {

  app.use('/api', require('../models/v1/downloadProducts/routes/index'));
  app.use('/api/category', require('../models/v1/category/routes/index'));
  app.use('/api/product', require('../models/v1/products/routes/index'));

}