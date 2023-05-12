const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const subCategoryService = require('../service/index');

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllSubCategories = async (req, res) => {

    const subcategories = await subCategoryService.getActivegetSubCategories();

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, subcategories })

}

module.exports.getSubCategoriesByCategory = async (req, res) => {

    const { categories } = req.body;

    const subcategories = await subCategoryService.getSubCategoriesByCategory(categories);

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, subcategories })

}


