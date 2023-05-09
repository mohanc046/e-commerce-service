const db = require('../../../../connection/db/index');

const getPrimaryCategory = () => {
  return db('cat1').select().where("status", "!=", "0");
}

const getSecondaryCategory = () => {
  return db('cat2').select().where("status", "!=", "0");
}

const getProductsWithBothFilters = (primaryCategory, secondaryCategory) => {
  return db('products_list')
    .where('Cat1_Id', `${primaryCategory}`)
    .where('Cat2_Id', `${secondaryCategory}`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}


const getProductsWithPrimaryFilters = (primaryCategory) => {
  return db('products_list')
    .where('Cat1_Id', `${primaryCategory}`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

const getProductsWithSecondaryFilters = (secondaryCategory) => {
  return db('products_list')
    .where('Cat2_Id', `${secondaryCategory}`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

module.exports = {
  getPrimaryCategory,
  getSecondaryCategory,
  getProductsWithBothFilters,
  getProductsWithPrimaryFilters,
  getProductsWithSecondaryFilters
}