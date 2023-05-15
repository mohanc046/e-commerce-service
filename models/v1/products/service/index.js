const db = require('../../../../connection/db/index');

const getAllProducts = () => {
    return db('product').select();
}

const getActiveProducts = () => {
    return db('product').select().where("status", "=", "1");
}

const getProductsByCategory = (categoryId) => {
    return db('product').select().whereIn("category", categoryId).where('status', '=', '1');
}

const getProductsBySubCategory = (subCategoryId) => {
    return db('product').select().whereIn("sub_category", subCategoryId).where('status', '=', '1');
}

module.exports = {
    getAllProducts,
    getActiveProducts,
    getProductsByCategory,
    getProductsBySubCategory,
}