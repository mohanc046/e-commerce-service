const db = require('../../../../connection/db/index');

const getPrimaryCategory = () => {
  return db('cat1').select().where("status", "!=", "0");
}

const getSecondaryCategory = () => {
  return db('cat2').select().where("status", "!=", "0");
}

const getAllProducts = () => {
  return db('products_list').select().where("status", "!=", "0");
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

const getProductsWithCategoryAndPriceFilter = (primaryCategory, secondaryCategory, { minPrice, maxPrice }) => {
  return db('products_list')
    .where('Cat1_Id', `${primaryCategory}`)
    .where('Cat2_Id', `${secondaryCategory}`)
    .where('Price', '>=' `${minPrice}`)
    .where('Price', '<=' `${maxPrice}`)
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

const getProductsWithPrimaryAndPriceFilters = (primaryCategory, { minPrice, maxPrice }) => {
  return db('products_list')
    .where('Cat1_Id', `${primaryCategory}`)
    .where('Price', '>=' `${minPrice}`)
    .where('Price', '<=' `${maxPrice}`)
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

const getProductsWithSecondaryAndPriceFilters = (secondaryCategory, { minPrice, maxPrice }) => {
  return db('products_list')
    .where('Cat2_Id', `${secondaryCategory}`)
    .where('Price', '>=' `${minPrice}`)
    .where('Price', '<=' `${maxPrice}`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

const getProductsWithPriceFilters = ({ minPrice, maxPrice }) => {
  return db('products_list')
    .where('Price', '>=' `${minPrice}`)
    .where('Price', '<=' `${maxPrice}`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

const getProductsWithProductNameSearch = (searchText) => {
  return db('products_list')
    .where('Product_name', 'ilike' `%${searchText}%`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

const getProductsWithCatalogueNameSearch = (searchText) => {
  return db('products_list')
    .where('Catalogue_name', 'ilike' `%${searchText}%`)
    .select(
      'products_list.Product_name as productName',
      'products_list.image_name as imagePath',
      'products_list.Full_description as description'
    )
}

const executeQueryBasedOnType = async (query) => {

  let productList;

  const {
    primaryCategory = "",
    secondaryCategory = "",
    searchText = "",
    selectedPricing = {},
    executionType
  } = query;

  switch (executionType) {

    case 'PRIMARY_FILTER': productList = await getProductsWithPrimaryFilters(primaryCategory);
      break;

    case 'SECONDARY_FILTER': productList = await getProductsWithSecondaryFilters(secondaryCategory)
      break;

    case 'CATEGORY_WITH_PRICING_FILTER': productList = await getProductsWithCategoryAndPriceFilter(primaryCategory, secondaryCategory, {
      minPrice: selectedPricing.min,
      maxPrice: selectedPricing.max
    })
      break;

    case 'CATEGORY_FILTER': productList = await getProductsWithBothFilters(primaryCategory, secondaryCategory)
      break;

    case 'PRODUCT_NAME_FILTER': productList = await getProductsWithProductNameSearch(searchText)

      break;

    case 'CATALOGUE_NAME_FILTER': productList = await getProductsWithCatalogueNameSearch(searchText);
      break;

    case 'PRIMARY_CATEGORY_WITH_PRICING_FILTER': productList = await getProductsWithPrimaryAndPriceFilters(primaryCategory, {
      minPrice: selectedPricing.min,
      maxPrice: selectedPricing.max
    })
      break;

    case 'SECONDARY_CATEGORY_WITH_PRICING_FILTER': await getProductsWithSecondaryAndPriceFilters(secondaryCategory, {
      minPrice: selectedPricing.min,
      maxPrice: selectedPricing.max
    })
      break;

    case 'PRICING_FILTER': productList = await getProductsWithPriceFilters({
      minPrice: selectedPricing.min,
      maxPrice: selectedPricing.max
    })
      break;

    default: productList = []
  }


  return productList;
}

module.exports = {
  getPrimaryCategory,
  getSecondaryCategory,
  getProductsWithBothFilters,
  getProductsWithPrimaryFilters,
  getProductsWithSecondaryFilters,
  executeQueryBasedOnType,
  getAllProducts
}