const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/auth/signup", [
        verifySignUp.checkDuplicateEmail,
        verifySignUp.checkRolesExisted
        ],
        controller.signup
    );
    app.post('/api/auth/login', controller.signin);
};

// router.post('/refreshToken', async function(req, res, next) {
//     const { refreshToken: requestToken } = req.body;
//     if (requestToken == null) {
//         return res.status(403).json({ message: 'Refresh token szükséges!'});
//     }
//     try {
//         let refreshToken = await RefreshToken.findOne({ token: requestToken });
//         if (!refreshToken) {
//             res.status(403).json({ message: "Refresh token is not in database!" });
//             return;
//         }
//         if (RefreshToken.verifyExpiration(refreshToken)) {
//             RefreshToken.findByIdAndRemove(refreshToken._id, { useFindAndModify: false }).exec();
//             res.status(403).json({
//                 message: "Lejárt a refresh token. Kérjük jelentkezzen be újra!",
//             });
//             return;
//         }
//         let newAccessToken = jwt.sign({ id: refreshToken.user._id }, 'secretkey', {expiresIn: Date.now() + 3600});
//         return res.status(200).json({
//             accessToken: newAccessToken,
//             refreshToken: refreshToken.token,
//         });
//     } catch (error) {
//         return res.status(500).send({ message: error });
//     }
// })

// router.post('/signup', function(req, res, next) {
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;
//     User.findOne({ email: email })
//         .then(userDoc => {
//             if (userDoc) {
//                 return res.status(400).json({
//                     title: 'hiba',
//                     error: 'Ezzel az email címmel már regisztráltak!'
//                 });
//             }
//             else if (password != confirmPassword)
//             {
//                 return res.status(400).json({
//                     title: 'hiba',
//                     error: 'A jelszavak nem egyeznek meg!'
//                 });
//             }
//             return bcrypt
//                 .hash(password, 12)
//                 .then(hashedPassword => {
//                 const user = new User({
//                     email: email,
//                     password: hashedPassword,
//                     cart: { items: [] },
//                     role: 'User'
//                 })
//                 return user.save(res.status(200).json({
//                     title: 'üzenet',
//                     message: 'Sikeres regisztráció!'
//                 }));
//             })
//         .then(result => {
//             return transporter.sendMail({
//                 to: email,
//                 from: 'scheuer.patrik@students.jedlik.eu',
//                 subject: 'Sikeres regisztráció',
//                 html: '<h1>Köszönjük, hogy regisztrált weboldalunkra!</h1>'
//             })
//         })
//     })
//     .catch(err => console.log(err));
// });

// router.post('/logout', async function(req, res, next) {
//     const { refreshToken: requestToken } = req.body
//     try {
//         let refreshToken = await RefreshToken.findOne({ token: requestToken});
//         if (!refreshToken) {
//             res.status(403).json({ message: 'A refresh token nincs az adatbázisban!'});
//             return;
//         }
//         if (RefreshToken.verifyExpiration(refreshToken)) {
//             RefreshToken.findByIdAndRemove(refreshToken._id, 
//                 { useFindAndModify: false }).exec();
//             res.status(403).json({
//                 message: "A munkamenet lejárt. Jelentkezzen be újra!"
//             });
//             return;
//         }
//     } catch (error) {
//         return res.status(500).send({ message: error });
//     }
// });