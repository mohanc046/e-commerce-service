const path = require("path");

const { FIXED_VALUES } = require("./connection");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: '68.178.145.252',
      user: 'test_ecom_user',
      password: 'LM&9[g*8Towc',
      database: 'vftyuu',
    },
    debug: false
  },
  staging: {
    client: "mysql2",
    connection: {
      host: '68.178.145.252',
      user: 'test_ecom_user',
      password: 'LM&9[g*8Towc',
      database: 'vftyuu',
    },
    debug: false
  }
}