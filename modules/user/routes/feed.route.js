const feedController = require('../controllers/feed.controller');

class FeedRoute{
    constructor(app){
        this.app = app;
        this.initRoutes();
    }
    initRoutes(){

        // list of people which user is following to
        this.app.get('/api/feed',
            function (req,res, next) {
                feedController.getFollowersPosts(req,res,next);
            }
        );
    }
}

module.exports = FeedRoute;