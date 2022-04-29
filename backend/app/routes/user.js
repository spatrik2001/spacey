const { authJwt } = require('../middleware');
const controller = require('../controllers/user');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get('/api/user/all', controller.allAccess);
    app.get('/api/user/user', [authJwt.verifyToken], controller.userBoard);
    app.get('/api/user/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
};