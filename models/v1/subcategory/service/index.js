const db = require('../../../../connection/db/index');

const getSubCategories = () => {
    return db('sub_category').select();
}

const getActivegetSubCategories = () => {
    return db('sub_category').select().where("status", "=", "1");
}

const getSubCategoriesByCategory = (categories) => {
    return db('sub_category').select().where("status", "=", "1")
        .whereIn('category_id', categories);
}

module.exports = {
    getSubCategories,
    getActivegetSubCategories,
    getSubCategoriesByCategory,
}