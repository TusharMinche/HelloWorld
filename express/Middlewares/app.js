const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res) => {
    res.send('<h1>Home</h1>');
});

app.listen(3000);