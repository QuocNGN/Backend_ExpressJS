const express = require("express");

const routerAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  postUpdateUserAPI,
  deleteUpdateUserAPI,
} = require("../controllers/apiController");

routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", postUpdateUserAPI);
routerAPI.delete("/users", deleteUpdateUserAPI);

module.exports = routerAPI;
