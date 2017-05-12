const userRoutes = require('./routes/user.route.js');
const statusRoutes = require('./routes/status.route.js');
//const followerRoutes = require('./routes/follower.route');

class User{
    constructor(app){
        this.app = app;
        this.userRoutes = new userRoutes(app);
        this.statusRoutes = new statusRoutes(app);
        //this.followersRoutes = new followerRoutes(app);
    }
}

module.exports = User;