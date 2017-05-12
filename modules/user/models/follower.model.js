const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// basic schema
const FollowFollowee = new mongoose.Schema({
    follower: String,
    following: String
}, { timestamps: true });

const followFollowee = mongoose.model('follow-followee', FollowFollowee);
module.exports = followFollowee;

