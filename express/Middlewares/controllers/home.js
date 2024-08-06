const rootDir = require('../util/path');
const path = require('path');

exports.home = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}