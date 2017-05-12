const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// basic schema
const User = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    followers: [{follower : string}],
    status: [{
        status: string,
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

// TODO: add this if require
// User.plugin(mongoosePaginate);

const user = mongoose.model('user', User);

module.exports = user;