const connection = require("../config/database");
const { getAllUser, getUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUser();
  return res.render("home.ejs", { listUsers: results });
};

const getQuocRoute = (req, res) => {
  res.send("My Project ExpressJS!!!!!! - Quoc Route is SUCCESS!");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

const getUserFromDB = async (req, res) => {
  let users = [];

  // connection.query("SELECT * FROM Users", function (err, results, fields) {
  //   users = results;
  //   // console.log(">>> results = ", results);
  //   res.send(JSON.stringify(users));
  // });

  const [results, fields] = await (
    await connection
  ).execute("SELECT * FROM Users");
  users = results;
  // console.log(">>> check result: ", results);
  res.send(JSON.stringify(users));
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log(
    ">>>Check request: email = ",
    email,
    "; name = ",
    name,
    "; city = ",
    city
  );

  // connection.query(
  //   `INSERT INTO Users (email, username, city)
  //   VALUES (?, ?, ?);`,
  //   [email, name, city],
  //   function (err, results) {
  //     console.log(results);

  //     res.send("Create user SUCCESS!!!");
  //   }
  // );

  const [results, fields] = await (
    await connection
  ).execute(`INSERT INTO Users (email, username, city) VALUES (?, ?, ?);`, [
    email,
    name,
    city,
  ]);
  console.log(">>> check result: ", results);
  res.send("Create user SUCCESS!!!");

  // const [results, fields] = await connection
  //   .query("SELECT * FROM Users")
  //   .stream();
  // console.log(">>> check result: ", results);
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  // console.log(">> req.param: ", req.params, userId);
  let user = await getUserById(userId);
  // console.log(user);
  res.render("edit.ejs", { userEdit: user });
};

module.exports = {
  getHomepage,
  getQuocRoute,
  getHoiDanIT,
  postCreateUser,
  getUserFromDB,
  getCreatePage,
  getUpdatePage,
};
