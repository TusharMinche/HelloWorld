const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/contactus', (req, res) => {
    console.log(req.body);
    res.redirect('/success');
});

router.get('/success', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;
