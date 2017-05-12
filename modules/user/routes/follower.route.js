var userController = require('../controllers/user.controller.js');
class UserRoute{
    constructor(app){
        this.app = app;
        this.initRoutes();
    }
    initRoutes(){

        this.app.get('/api/user',
            function (req,res, next) {
                userController.getUser(req,res,next);
            }
        );

        this.app.post('/api/user',
            function (req,res, next) {
                userController.addUser(req,res,next);
            }
        );

        this.app.put('/api/user',
            function (req,res, next) {
                userController.updateUser(req,res,next);
            }
        );

        // soft delete
        this.app.delete('/api/user',
            function (req,res, next) {
                userController.deleteUser(req,res,next);
            }
        );

        // TODO: Remove this after basic setup testing
        this.app.get('/testingServer', function (req, res, next) {
            res.send('Server is running');
        });
    }
}

module.exports = UserRoute;