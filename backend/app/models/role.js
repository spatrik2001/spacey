const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoleSchema = new Schema({
    name: String
})

module.exports = mongoose.model('Role', RoleSchema);