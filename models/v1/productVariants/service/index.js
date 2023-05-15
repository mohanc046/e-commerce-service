const db = require('../../../../connection/db/index');

const getProductVariantsByProductId = (productId) => {
    return db('product_variants').select().where('product_id', productId);
}

const getActiveProductVariantsByProductId = (productId) => {
    return db('product_variants').select().where("status", "=", "1").where('product_id', productId);
}

module.exports = {
    getProductVariantsByProductId,
    getActiveProductVariantsByProductId,
}