var followerController = require('../controllers/follower.controller');

class StatusRoute{
    constructor(app){
        this.app = app;
        this.initRoutes();
    }
    initRoutes(){

        // list of people which user is following to
        this.app.get('/api/follower',
            function (req,res, next) {
                followerController.getFollowers(req,res,next);
            }
        );

        /*// list of people who follow a user
        this.app.get('/api/followee',
            function (req,res, next) {
                followerController.getStatus(req,res,next);
            }
        );*/

        this.app.post('/api/follower',
            function (req,res, next) {
                followerController.follow(req,res,next);
            }
        );
    }
}

module.exports = StatusRoute;