const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await (await connection).query("SELECT * FROM Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await (
    await connection
  ).query("SELECT * FROM Users WHERE id = ?", [userId]);
  // console.log(results);

  // chuyen arr sang 1 phan tu
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  const [results, fields] = await (
    await connection
  ).execute(
    `UPDATE Users
  SET email = ?, username = ?, city = ?
  WHERE id = ?`,
    [email, name, city, userId]
  );
};

const deleteUserById = async (userId) => {
  const [results, fields] = await (
    await connection
  ).execute(`DELETE FROM Users WHERE id = ?`, [userId]);
};
module.exports = {
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
