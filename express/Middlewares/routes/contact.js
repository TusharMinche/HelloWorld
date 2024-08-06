const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const {getContactUs, postContactUs, success} = require('../controllers/contact');

router.get('/contactus', getContactUs);

router.post('/contactus', postContactUs);

router.get('/success', success);

module.exports = router;
