require("dotenv").config();
const mysql = require("mysql2/promise");

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  // port: 3307,(port docker) || default mysql: 3306
  // port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
