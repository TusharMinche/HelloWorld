const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'root', 'TusharMinche@2003', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;