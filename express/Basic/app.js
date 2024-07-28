const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Inside middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Inside another middleware");
    res.send('<h1>Hello</h1>');
});

app.listen(3000);