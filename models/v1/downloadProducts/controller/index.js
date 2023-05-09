const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const downloadProductService = require('../service/index');

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllCategory = async (req, res) => {

  const category1 = await downloadProductService.getPrimaryCategory();

  const category2 = await downloadProductService.getSecondaryCategory();

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, category1, category2 })

}


module.exports.getProductList = async (req, res) => {

  const { body } = req;

  const { primaryCategory = "", secondaryCategory = "" } = body;

  let productList;

  let isPrimaryCategoryNotEmpty = !_.isEmpty(primaryCategory);

  let isSecondaryCategoryNotEmpty = !_.isEmpty(secondaryCategory);

  if (isPrimaryCategoryNotEmpty && isSecondaryCategoryNotEmpty) {
    productList = await downloadProductService.getProductsWithBothFilters(primaryCategory, secondaryCategory)
  }
  else if (isPrimaryCategoryNotEmpty) {
    productList = await downloadProductService.getProductsWithPrimaryFilters(primaryCategory)
  }
  else if (isSecondaryCategoryNotEmpty) {
    productList = await downloadProductService.getProductsWithSecondaryFilters(secondaryCategory)
  } else {
    productList = []
  }

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, productList })

}