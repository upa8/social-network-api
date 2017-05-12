const User = require('../models/user.model');
const Follower = require('../models/follower.model');
const Feed = require('../models/feeds.model');

const _ = require('lodash');
var nodeCache = {};
class FeedController{
    constructor(){
        this.name = 'feedController';
    }

    getFollowersPosts(req, res, next){
        // psedo algorithm
        // get list of all the followers,
        // persist it in memory

        this.getUserFollowers().then(this.getFeeds)
            .then(this.findFollowersPost)
            .then(this.selectRequirePosts)
            .then(this.sendRequirePosts)
            .then(function (result) {
                console.log('Results');
                res.send('Final results');
            }).catch(function (err) {
            console.log('error');
        })

        // get first 1000 posts from feeds table,
        // check if those 1000 posts contains posts from the given follower list
        // maintain the cursor , let's say x

        // get first 10 posts, send back to user,
        // let user scroll,
        // again hit the hit, with x, and fetch next 1000 posts
        // repeat this procedure

        // get followers of the user
    }

    getUserFollowers(){
        return new Promise(function (resolve, reject) {
            console.log('Promise resolved')
            resolve('Got follower list');
        });
    }
    getFeeds(result){
        return new Promise(function (resolve, reject) {
            console.log(result);
            resolve('Got feeds list');
        });
    }
    findFollowersPost(result){
        return new Promise(function (resolve, reject) {
            console.log(result)
            resolve('Found follower posts');
        });
    }
    selectRequirePosts(result){
        return new Promise(function (resolve, reject) {
            console.log(result)
            resolve('Selected required posts');
        });
    }
    sendRequirePosts(result){
        return new Promise(function (resolve, reject) {
            console.log(result)
            resolve('sendRequirePosts');
        });
    }
}
var feedController = new FeedController();
module.exports = feedController;