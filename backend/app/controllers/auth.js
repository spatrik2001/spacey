const db = require("../models");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const crypto = require('crypto');

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: 'API kulcs helye'
  }
}));

exports.register = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    if (password != confirmPassword) {
        res.status(400).send({ message: "A jelszavak nem egyeznek meg!" });
         return;
    }
    const user = new User({
        email: email,
        password: bcrypt.hashSync(password, 8)
    });
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (req.body.roles) {
            Role.find(
            {
                name: { $in: req.body.roles }
            },
            (err, roles) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                user.roles = roles.map(role => role._id);
                user.save(err => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }
                    res.send({ message: "Sikeres regisztráció!" });
                });
            }
        );
        } else {
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                user.roles = [role._id];
                user.save(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
                res.send({ message: "Sikeres regisztráció!" });
                });
            });
        }
    })            
};
exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
    .populate("role", "-__v")
    .exec((err, user) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        if (!user) {
            return res.status(404).send({ message: "A felhasználó nem található!" });
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Helytelen jelszó!"
            });
        }
        var token = jwt.sign({ id: user.id }, 'secretkey', {expiresIn: 86400});
        var authorities = [];
        for (let i = 0; i < user.role.length; i++) {
            authorities.push(user.role[i].name);
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            role: authorities,
            accessToken: token
        });
    });
};