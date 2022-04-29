const db = require('../models/index');
const roles = db.roles;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({email: email})
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(400).send({ message: "Ezzel az email címmel már regisztráltak!" });
                return;
            }
            else if (password != confirmPassword) {
                res.status(400).send({ message: "A jelszavak nem egyeznek meg!" });
                return;
            }
            next();
    });
};
    
checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!roles.includes(req.body.role[i])) {
                res.status(400).send({message: 'Ez a role nem létezik!'});
                return;
            }
        }
    }
    next();
};
const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExisted
};

module.exports = verifySignUp;