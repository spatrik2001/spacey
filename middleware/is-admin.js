module.exports = (req, res, next) => {
    if (!req.session.role == "Admin") {
        res.redirect('/')
    }
    next()
}