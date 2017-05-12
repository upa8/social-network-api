const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// basic schema
const User = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    following: [],// store email address
    followers: [],
    lastStatusUpdate: {type: Date},
    status: [{
        status: String,
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

// TODO: add this if require
// FollowFollowee.plugin(mongoosePaginate);

const user = mongoose.model('user', User);

module.exports = user;

// inhancements
// maintain a recent 10 posts
// store last status adding activity

// we can write a batch script which will add post in all his followers recent feed
