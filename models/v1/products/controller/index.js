const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const productService = require('../service/index');

const productVariantService = require('../../productVariants/service/index')

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllProducts = async (req, res) => {

    const products = await productService.getAllProducts();

    await Promise.all(
        _.map(products, async (item) => {
            item.variants = await productVariantService.getActiveProductVariantsByProductId(item.id)
        })
    )

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, categories })

}


module.exports.getActiveProducts = async (req, res) => {

    const products = await productService.getActiveProducts();
    await Promise.all(
        _.map(products, async (item) => {
            item.variants = await productVariantService.getActiveProductVariantsByProductId(item.id)
        })
    )

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, products })

}

module.exports.getProductsByCategory = async (req, res) => {

    const { categoryId } = req.body

    const products = await productService.getProductsByCategory(categoryId);
    await Promise.all(
        _.map(products, async (item) => {
            item.variants = await productVariantService.getActiveProductVariantsByProductId(item.id)
        })
    )

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, products })

}

module.exports.getProductsBySubCategory = async (req, res) => {

    const { categoryId: subCategoryId } = req.body

    const products = await productService.getProductsBySubCategory(subCategoryId);
    await Promise.all(
        _.map(products, async (item) => {
            item.variants = await productVariantService.getActiveProductVariantsByProductId(item.id)
        })
    )

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, products })

}



