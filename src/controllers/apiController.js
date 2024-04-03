const User = require("../models/User");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let user = await User.create({ email, name, city });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const postUpdateUserAPI = async (req, res) => {
  let { email, name, city, userId } = req.body;

  // await updateUserById(email, name, city, userId);
  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );

  return res.status(201).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUpdateUserAPI = async (req, res) => {
  let id = req.body.userId;

  let user = await User.deleteOne({ _id: id });

  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  postUpdateUserAPI,
  deleteUpdateUserAPI,
};
