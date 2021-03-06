const User = require('../models/user.model');
const Feed = require('../models/feeds.model');
const _ = require('lodash');

class StatusController{
    constructor(){
        this.name = 'statusController';
    }
    //TODO: Refactor this method asap
    getStatus(req, res, next){
        res.send('FollowFollowee is sent')
    }

    addStatus(req, res, next){
        // we can user findAndModify or update
        // depending upon the requirement
        // as of now we don't need update, eventual consistency is required only

        // TODO:
        // validation for email is remained
        // status validation is remained
        // check if status is less than 140 char or not

        const feed = new Feed({
            email: req.body.email,
            status: req.body.status,
            date: new Date()
        });


        feed.save(function(err) {
            // error can occur if url is not unique
            // return error if there is an error in post method
            if (err){
                // TODO: enhance the error
                res.send('Error in updating status');
            }else{
                res.send('Status added succesfully');
            }
        });

        /*        User.update({ email: req.body.email}, { $push: { status: {
         $each: [{
         status: req.body.status,
         data: new Date()
         }],
         $position : 0
         }}, lastStatusUpdate : new Date()} , function (err,result) {
         if(err){
         res.send('Error in adding status');
         }else{
         res.send('FollowFollowee updated');
         }
         });*/

        // upset is kept false
        // get user email
        // find user
        // prepend the user status into status list

    }

    updateStatus(req, res, next){
        res.send('FollowFollowee is updated');
    }

    deleteStatus(req, res, next){
        res.send('FollowFollowee is deleted');
    }
}
var statusController = new StatusController();
module.exports = statusController;