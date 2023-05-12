const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const categoryService = require('../service/index');

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllCategories = async (req, res) => {

    const categories = await categoryService.getActiveCategories();

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, categories })

}

module.exports.getCategoriesBySlug = async (req, res) => {

    const { slugList } = req.body

    const categories = await categoryService.getCategoriesBySlug(slugList);

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, categories })

}


