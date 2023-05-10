const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const downloadProductService = require('../service/index');

const { getExecutionTypeForProductList, getUpdatedSecondaryCategoryList } = require("../../../../utils");

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllCategory = async (req, res) => {

  const category1 = await downloadProductService.getPrimaryCategory();

  const category2 = await downloadProductService.getSecondaryCategory();

  const formulaeList = await downloadProductService.getFormulae();

  const productList = await downloadProductService.getAllCatalogue();

  let updatedSecondaryCategoryList = getUpdatedSecondaryCategoryList(category2, formulaeList);

  let catalogueList = _.map(productList, (item) => `${_.get(item, 'Catalogue_name')}`.trim());

  let uniqueCatalogueList = _.uniq(catalogueList);

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, category1, category2: updatedSecondaryCategoryList, catalogueList: uniqueCatalogueList, formulaeList })

}


module.exports.getProductList = async (req, res) => {

  const { body } = req;

  let executionType = getExecutionTypeForProductList(body)

  let productList = await downloadProductService.executeQueryBasedOnType({ ...body, executionType })

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, productList })

}