const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    role: String
})

module.exports = ('Role', RoleSchema);