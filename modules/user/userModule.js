var userRoutes = require('./routes/user.route.js');

class User{
    constructor(app){
        this.app = app;
        this.userRoutes = new userRoutes(app);
    }
}

module.exports = User;