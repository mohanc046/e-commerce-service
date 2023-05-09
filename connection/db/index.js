require("dotenv").config();

const knex = require("knex")

const config = require("../../knexfile");

const { FIXED_VALUES } = require('../../connection/index');

let db = null;

if (FIXED_VALUES.NODE_ENV === "DEV") {

  db = knex(config.development)

} else {
  db = knex(config.staging)
}

module.exports = db