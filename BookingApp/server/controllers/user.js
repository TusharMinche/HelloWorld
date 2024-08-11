const Users = require("../models/user");

// Get all users
exports.getData = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json({
      data: users,
      message: "Successfully fetched data",
    });
  } catch (err) {
    console.log("Error while getting data", err);
    res.status(500).json({
      message: "Error on server",
    });
  }
};

// Add a new user
exports.addData = async (req, res) => {
  const { username, email } = req.body;
  const phonenumber = req.body.phone;
  if (!username || !email || !phonenumber) {
    return res.status(400).json({
      message: "Data not found",
    });
  }

  try {
    await Users.create({
      username,
      email,
      phonenumber,
    });
    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    console.log("Error while adding user", err);
    res.status(500).json({
      message: "Error on server",
    });
  }
};

// Get a specific user by username
exports.getUser = async (req, res) => {
  const { username } = req.params;

  if (!username) {
    return res.status(400).json({
      message: "Please send username",
    });
  }

  try {
    const user = await Users.findOne({ where: { username } });
    if (user) {
      res.json({
        user,
        message: "User fetched successfully",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Error while fetching user", err);
    res.status(500).json({
      message: "Error on server",
    });
  }
};

// Delete a user by username
exports.deleteUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await Users.findOne({ where: { username } });
    if (user) {
      await user.destroy();
      res.json({
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Error while deleting user", err);
    res.status(500).json({
      message: "Error on server",
    });
  }
};
