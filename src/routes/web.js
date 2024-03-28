const express = require("express");
const {
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
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/quocnguyen", getQuocRoute);
router.get("/hoidanit", getHoiDanIT);
router.get("/getUser", getUserFromDB);

router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);

// select right id to delete when click form button
router.post("/delete-user/:id", postDeleteUser);
// confirm to delete and direct to Remove The Data from DATABASE
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
