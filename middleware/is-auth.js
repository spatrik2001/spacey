module.exports = (req, res, next) => {
    if (!req.user.isAdmin) {
        res.redirect('/login')
    }
    next()
}