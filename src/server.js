require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
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

// self running function
(async () => {
  try {
    //  test connection
    await connection();
    //  Chay server
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (err) {
    console.log(">>> Error connect to DB: ", err);
  }
})();
