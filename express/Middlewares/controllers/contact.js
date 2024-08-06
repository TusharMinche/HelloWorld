const rootDir = require('../util/path');
const path = require('path');

exports.getContactUs =  (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}

exports.postContactUs = (req, res) => {
    console.log(req.body);
    res.redirect('/success');
}

exports.success = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}