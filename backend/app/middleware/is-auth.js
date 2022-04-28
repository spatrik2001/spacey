const jwt = require('jsonwebtoken');

const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: 'Az access token lejárt.'});
    }
    return res.sendStatus(401).send({ message: 'Unauthorized!'});
}
const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if(!token) {
        return res.status(403).send({ message: 'Ebben a munkamenetben nincs token.'});
    }
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }
        req.userId = decoded.id;
        next();
    })
}