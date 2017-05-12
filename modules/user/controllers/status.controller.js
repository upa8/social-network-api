const User = require('../models/user.model.js');
const _ = require('lodash');

class StatusController{
    constructor(){
        this.name = 'statusController';
    }
    //TODO: Refactor this method asap
    getStatus(req, res, next){
        res.send('Status is sent')
    }

    addStatus(req, res, next){
        // we can user findAndModify or update
        // depending upon the requirement
        // as of now we don't need update, eventual consistency is required only

        // TODO:
        // validation for email is remained
        // status validation is remained
        // check if status is less than 140 char or not
        User.update({ email: req.body.email}, { $push: { status: {
            $each: [{
                status: req.body.status,
                data: new Date()
            }],
            $position : 0
        }} }, function (err,result) {
            if(err){
                res.send('Error in adding status');
            }else{
                res.send('Status updated');
            }
        });

        // upset is kept false
        // get user email
        // find user
        // prepend the user status into status list

    }

    updateStatus(req, res, next){
        res.send('Status is updated');
    }

    deleteStatus(req, res, next){
        res.send('Status is deleted');
    }
}
var statusController = new StatusController();
module.exports = statusController;