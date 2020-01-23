require("dotenv").config();
const pgp = require("pg-promise")({
    query: e => console.log(e.query)
  });
  const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
  });
console.log("Database Host Name is: ", process.env.DB_HOST);
console.log("The database is running on port: ",process.env.DB_PORT);
console.log("You are using the ",process.env.DB_NAME, "database");

module.exports = db;