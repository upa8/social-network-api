const userRoutes = require('./routes/user.route');
const statusRoutes = require('./routes/status.route');
const followerRoutes = require('./routes/follower.route');
const feedRoutes = require('./routes/feed.route');

class User{
    constructor(app){
        this.app = app;
        this.userRoutes = new userRoutes(app);
        this.statusRoutes = new statusRoutes(app);
        this.followersRoutes = new followerRoutes(app);
        this.feedRoutes = new feedRoutes(app);
    }
}

module.exports = User;