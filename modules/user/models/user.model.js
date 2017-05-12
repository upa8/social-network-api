const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const User = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
}, { timestamps: true });

// TODO: add this if require
// User.plugin(mongoosePaginate);

const user = mongoose.model('user', User);

module.exports = user;