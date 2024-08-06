const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const {home} = require('../controllers/home');

router.get('/', home);

module.exports = router;
