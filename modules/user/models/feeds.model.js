const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// basic schema
const Feed = new mongoose.Schema({
    email: String,
    status: String,
    date: { type: Date }

}, { timestamps: true });

// TODO: add this if require
// Feed.plugin(mongoosePaginate);

const feed = mongoose.model('feed', Feed);

module.exports = feed;

// inhancements
// maintain a recent 10 posts
// store last status adding activity

// we can write a batch script which will add post in all his followers recent feed
