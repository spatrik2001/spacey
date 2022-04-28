const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const app = require('../../app');

const Schema = mongoose.Schema;
const RefreshTokenSchema = new Schema({
    token: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    expiryDate: Date
});

RefreshTokenSchema.statics.createToken = async function(user) {
    let expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + app.jwtRefreshExpiration);
    let _token = uuidv4();
    let _object = new this({
        token: _token,
        user: user._id,
        expiryDate: expiredAt.getTime()
    });
    console.log(_object);
    let refreshToken = await _object.save();
    return refreshToken.token;
};
RefreshTokenSchema.statics.verifyExpiration = (token) => {
    return token.expiryDate.getTime < new Date().getTime();
}

module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);