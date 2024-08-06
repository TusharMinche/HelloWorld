const rootDir = require('../util/path');
const path = require('path');

exports.addProduct = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.shop = (req, res) => {
    console.log(req.body);
    res.redirect('/shop');
}