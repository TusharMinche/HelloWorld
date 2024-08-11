const express = require("express");
const router = express.Router();
const { getData, addData, getUser, deleteUser } = require("../controllers/user");

router.get('/get-data', getData);
router.post('/add-data', addData);
router.get('/get-user/:username', getUser); // Changed to use route parameters for the username
router.delete('/delete-user/:username', deleteUser); // Changed to use route parameters for the username

module.exports = router;
