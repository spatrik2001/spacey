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

exports.signup = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email})
        .then(() => {
            if (password != confirmPassword)
            {
                return res.status(401).send({ error: 'A jelszavak nem egyeznek meg!' });
            }
            return bcrypt
                .hashSync(password, 12)
                .then(hashedPassword => {
                      const user = new User({
                          email: email,
                          password: hashedPassword,
                          cart: { items: [] },
                          role: role    
                      })
                      return user.save((err, user) => {
                          if (err) {
                              res.status(500).send({ message: err });
                              return;
                          }
                          if (req.body.role) {
                              Role.find(
                              {
                                  name: { $in: req.body.role }
                              },
                              (err, roles) => {
                                  if (err) {
                                      res.status(500).send({ message: err });
                                      return;
                                  }
                                  user.role = role.map(role => role._id);
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
                                user.role = [role._id];
                                user.save(err => {
                                if (err) {
                                    res.status(500).send({ message: err });
                                    return;
                                }
                                res.send({ message: "Sikeres regisztráció!" });
                            });
                        });
                    }
                }
            );
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
};
exports.signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
    .populate("role", "-__v")
    .exec((err, user) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        if (!user) {
            return res.status(404).send({ message: "A felhasználó nem található!" });
        }
        var passwordIsValid = bcrypt.compareSync(password, user.password);
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