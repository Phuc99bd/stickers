// Update with your config settings.
require("dotenv").config()

module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.USER}:${process.env.PASSWORD}@localhost/cjs-web-store`,
  },
};
