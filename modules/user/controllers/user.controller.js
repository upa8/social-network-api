const User = require('../models/user.model.js');
const _ = require('lodash');

class UserController{
    constructor(){
        this.name = 'userController';
    }
    //TODO: Refactor this method asap
    getUser(req, res, next){
        res.send('User data is rendered');
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
                throw err;
            }
            console.log('User is saved');
        });

        res.send('User is added');
    }

    updateUser(req, res, next){
        res.send('User is updated');
    }

    deleteUser(req, res, next){
        res.send('User is deleted');
    }
}
var userController = new UserController();
module.exports = userController;