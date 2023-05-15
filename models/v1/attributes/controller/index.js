const { StatusCodes } = require("http-status-codes");

const _ = require('lodash');

const { config } = require('../../../../utils/constant');

const attributeService = require('../service/index');

const { statusCode: { FAILED, SUCCESS } } = config;

module.exports.getAllAttributes = async (req, res) => {

    const attributes = await attributeService.getActiveAttributes();

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, attributes })

}

module.exports.getActiveAttributes = async (req, res) => {

    const attributes = await attributeService.getActiveAttributes();

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, attributes })

}

module.exports.getAttributeValuesByAttributeId = async (req, res) => {

    const {attributeId } = req.body

    const attributeValues = await attributeService.getAttributeValuesByAttributeId(attributeId);

    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, attributeValues })

}

module.exports.getAllAttributeValuesByAttributes = async (req, res) => {

    const {attributes } = req.body

    const attributeValues = await attributeService.getAllAttributeValuesByAttributes(attributes);
    
    return res.status(StatusCodes.OK).json({ statusCode: SUCCESS, attributeValues })

}


