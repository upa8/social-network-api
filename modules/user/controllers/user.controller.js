const User = require('../models/user.model.js');
const _ = require('lodash');

class UserController{
    constructor(){
        this.name = 'userController';
    }
    //TODO: Refactor this method asap
    getUser(req, res, next){
        res.send('FollowFollowee data is rendered');
    }

    addUser(req, res, next){
        // verification of parameters before adding
        var user = new User({
            email: req.body.email,
            name: req.body.name
        });

        user.save(function(err) {
            // error can occur if url is not unique
            // return error if there is an error in post method
            if (err){
                // TODO: enhance the error
                res.send('Email already present');
            }else{
                res.send('FollowFollowee is added');
            }
        });
    }

    updateUser(req, res, next){
        res.send('FollowFollowee is updated');
    }

    deleteUser(req, res, next){
        res.send('FollowFollowee is deleted');
    }
}
var userController = new UserController();
module.exports = userController;