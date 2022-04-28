const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const app = require('../../app');

const User = require('../models/user');
const RefreshToken = require('../models/refreshtoken');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
      api_key: 'API kulcs helye'
    }
}));

router.post('/login', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User
    .findOne({ email: email })
    .populate('roles', '-__v')
    .then(async (user) => {
        if(!user) {
            return res.status(401).json({
                title: 'hiba',
                error: 'Helytelen email vagy jelszó!'
            });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                title: 'hiba',
                error: 'Helytelen email vagy jelszó!'
            });
        }
        const token = jwt.sign({ userId: user._id}, app.config, {expiresIn: app.jwtExpiration});
        const refreshToken = await RefreshToken.createToken(user);
        const authorities = [];
        for (let i = 0; i < user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            const newAccessToken = jwt.sign({id: refreshToken.user._id}, app.config,
                {expiresIn: app.jwtExpiration});
            res.status(200).json({
                title: 'üzenet',
                token: token
            });
            console.log(err);
        });
    })
});

router.post('/signup', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.status(400).json({
                    title: 'hiba',
                    error: 'Ezzel az email címmel már regisztráltak!'
                });
            }
            else if (password != confirmPassword)
            {
                return res.status(400).json({
                    title: 'hiba',
                    error: 'A jelszavak nem egyeznek meg!'
                });
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                const user = new User({
                    email: email,
                    password: hashedPassword,
                    cart: { items: [] },
                    role: 'User'
                })
                return user.save(res.status(200).json({
                    title: 'üzenet',
                    message: 'Sikeres regisztráció!'
                }));
            })
        .then(result => {
            return transporter.sendMail({
                to: email,
                from: 'scheuer.patrik@students.jedlik.eu',
                subject: 'Sikeres regisztráció',
                html: '<h1>Köszönjük, hogy regisztrált weboldalunkra!</h1>'
            })
        })
    })
    .catch(err => console.log(err));
});

router.post('/logout', function(req, res, next) {
    req.session.destroy(err => {
        res.redirect('/');
    });
})

module.exports = router;