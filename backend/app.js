const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const jwt = require('jsonwebtoken');
const flash = require('connect-flash');

const corsOptions = {
    origin: "http://localhost:8080",
    credentials: true
};
const User = require('./app/models/user');

const MONGODB_URI =
    'mongodb+srv://scheuer_patrik:asdasd123@cluster0.icldh.mongodb.net/spacey?authSource=admin&replicaSet=atlas-22dxd0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/spacey';

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const productApiRoutes = require('./app/routes/product');
const userApiRoutes = require('./app/routes/user');
const orderApiRoutes = require('./app/routes/order');
const authApiRoutes = require('./app/routes/auth');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);
app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

app.use('/api/products', productApiRoutes);
app.use('/api/users', userApiRoutes);
app.use('/api/orders', orderApiRoutes);
app.use('/api/auth', authApiRoutes);

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = {
    jwtExpiration: 3600,
    jwtRefreshExpiration: 86400
};