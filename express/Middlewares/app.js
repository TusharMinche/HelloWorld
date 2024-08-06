const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact');


const {notFound} = require('./controllers/notFound');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use(contactRoutes);

app.use(notFound);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
