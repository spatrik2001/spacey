const db = require('../models/index');
const roles = db.roles;
const User = db.user;

checkDuplicateEmail = (req, res, next) => {
    User.findOne({email: req.body.email})
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
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