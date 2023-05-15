const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const productVariantService = require('../service/index');

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getProductVariantsByProductId = async (productId) => {

    const variants = await productVariantService.getProductVariantsByProductId(productId);

    return { statusCode: SUCCESS, variants }

}

module.exports.getActiveProductVariantsByProductId = async (productId) => {

    const variants = await productVariantService.getActiveProductVariantsByProductId(productId);

    return { statusCode: SUCCESS, variants }

}


