const express = require("express");
const {
  getHomepage,
  getQuocRoute,
  getHoiDanIT,
  postCreateUser,
  getUserFromDB,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);
router.get("/quocnguyen", getQuocRoute);
router.get("/hoidanit", getHoiDanIT);
router.get("/getUser", getUserFromDB);

router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

router.get("/update/:id", getUpdatePage);

module.exports = router;
