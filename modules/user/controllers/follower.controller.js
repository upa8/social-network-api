const User = require('../models/user.model.js');
const _ = require('lodash');

class FollowerController{
    constructor(){
        this.name = 'followerController';
    }

    // get the list of all the follwers of the user
    //TODO: Refactor this method asap
    getFollowers(req, res, next){
        res.send('Follower list is sent')
    }

    follow(req, res, next){

        // we can user findAndModify or update
        // depending upon the requirement
        // as of now we don't need update, eventual consistency is required only
        // TODO:
        // validation for email is remained
        // status validation is remained
        // check if status is less than 140 char or not

        // TODO:
        // check if req.body.following user is present in db or not
        User.update({ email: req.body.email}, {  $addToSet: {following:  [req.body.following]  } }, function (err,result) {
            if(err){
                res.send('Error in following someone');
            }else{

                res.send('You followed the user');
            }
        });
    }
    unFollow(req, res, next){
        res.send('true')
    }

}
var followerController = new FollowerController();
module.exports = followerController;