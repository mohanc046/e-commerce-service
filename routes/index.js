
module.exports = app => {

  app.use('/api', require('../models/v1/downloadProducts/routes/index'));

}