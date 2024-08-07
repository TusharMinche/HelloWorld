const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const {home, getProduct} = require('../controllers/home');

router.get('/product/:productId', getProduct);

router.get('/', home);

module.exports = router;
