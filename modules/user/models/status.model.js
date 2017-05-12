const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// basic schema
const Status = new mongoose.Schema({
    email: String,
    status: [{
        status: String,
        date: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

// TODO: add this if require
// FollowFollowee.plugin(mongoosePaginate);

const status = mongoose.model('status', Status);

module.exports = status;

