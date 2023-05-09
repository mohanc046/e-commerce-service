const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const downloadProductService = require('../service/index');

const { getExecutionTypeForProductList } = require("../../../../utils");

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllCategory = async (req, res) => {

  const category1 = await downloadProductService.getPrimaryCategory();

  const category2 = await downloadProductService.getSecondaryCategory();

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, category1, category2 })

}


module.exports.getProductList = async (req, res) => {

  const { body } = req;

  let executionType = getExecutionTypeForProductList(body)

  let productList = await downloadProductService.executeQueryBasedOnType({ ...body, executionType })

  return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, productList })

}