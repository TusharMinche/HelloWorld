const path = require('path');
const rootDir = require('../util/path');

exports.notFound = (req, res) => {
    return res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}