const express = require('express');
const path = require('path');

const router = express.Router();

const {addProduct, shop} = require('../controllers/admin');

router.get('/add-product', addProduct);

router.post('/add-product', shop);

module.exports = router;
