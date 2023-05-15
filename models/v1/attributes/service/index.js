const db = require('../../../../connection/db/index');

const getAttributes = () => {
    return db('attributes').select();
}

const getActiveAttributes = () => {
    return db('attributes').select().where("status", "=", "1");
}

const getAttributeValuesByAttributeId = (attributeId) => {
    return db('attribute_values').select().where("attribute_id", "=", attributeId)
}

const getAllAttributeValuesByAttributes = (attributeIds) => {
    return db('attribute_values').select().whereIn("attribute_id", attributeIds)
}

module.exports = {
    getAttributes,
    getActiveAttributes,
    getAttributeValuesByAttributeId,
    getAllAttributeValuesByAttributes
}