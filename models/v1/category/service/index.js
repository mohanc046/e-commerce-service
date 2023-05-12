const db = require('../../../../connection/db/index');

const getCategories = () => {
    return db('category').select();
}

const getActiveCategories = () => {
    return db('category').select().where("status", "=", "1");
}

const getCategoriesBySlug = (slugs) => {
    return db('category').select().where("status", "=", "1")
        .whereIn('slug', slugs);
}

module.exports = {
    getCategories,
    getActiveCategories,
    getCategoriesBySlug,
}