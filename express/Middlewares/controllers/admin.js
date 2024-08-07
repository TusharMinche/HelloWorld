const rootDir = require('../util/path');
const path = require('path');

const Product = require('../models/product');

exports.addProduct = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.shop = (req, res) => {
    const product = new Product(req.body.title);
    product.save();

    console.log(product.fetchAll);

    res.redirect('/shop');
}