const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');

const User = require('../models/user');

router.post('/login', function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User
    .findOne({email: email})
    .then(user => {
        if(!user)
            res.json({ 'hiba': 'Helytelen email vagy jelszó!'});
        bcrypt.compare(password, user.password)
        .then(doMatch => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    console.log(err);
                });
            }
        })
    })
});

module.exports = router;