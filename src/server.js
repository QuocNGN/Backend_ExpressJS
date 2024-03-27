require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

// console.log(">>> Check ENV: ", process.env);

const app = express();
// const port = 8081;
// const hostname = "localhost";
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config req.body (convert data value form - input)
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data

// config template engines with Express
// config static file: image/css/js
configViewEngine(app);

//  Khai bao route
app.use("/", webRoutes);

//  test connection

// Simple query
// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log(">>> results = ", results);
//   // console.log(">>> fields =", fields);
// });

//  Chay server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
