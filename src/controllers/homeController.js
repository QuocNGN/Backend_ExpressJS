const connection = require("../config/database");
const User = require("../models/User");
const {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await User.find({});
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

  // const [results, fields] = await (
  //   await connection
  // ).execute(`INSERT INTO Users (email, username, city) VALUES (?, ?, ?);`, [
  //   email,
  //   name,
  //   city,
  // ]);

  await User.create({ email, name, city });
  res.redirect("/");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;

  // findById('123') => {} : so it lay 1
  // find({}) => [] : lay so nhieu
  let user = await User.findById(userId).exec();
  console.log(user);

  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  // let email = req.body.email;
  let { email, name, city, userId } = req.body;
  console.log(
    ">>>Check request: email = ",
    email,
    "; name = ",
    name,
    "; city = ",
    city,
    "; userId = ",
    userId
  );

  // await updateUserById(email, name, city, userId);
  await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await User.findById(userId).exec();
  console.log(user);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  let id = req.body.userId;

  let result = await User.deleteOne({ _id: id });
  console.log(">>> Check result: ", result);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  getQuocRoute,
  getHoiDanIT,
  postCreateUser,
  getUserFromDB,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
