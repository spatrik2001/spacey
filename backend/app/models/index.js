const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require('./user');
db.role = require('./role');
db.refreshToken = require('./refreshtoken');
db.roles = ["user", "admin"];

module.exports = db;