var statusController = require('../controllers/status.controller');

class StatusRoute{
    constructor(app){
        this.app = app;
        this.initRoutes();
    }
    initRoutes(){

        this.app.get('/api/status',
            function (req,res, next) {
                statusController.getStatus(req,res,next);
            }
        );

        this.app.post('/api/status',
            function (req,res, next) {
                statusController.addStatus(req,res,next);
            }
        );

        this.app.put('/api/status',
            function (req,res, next) {
                statusController.updateStatus(req,res,next);
            }
        );

        // soft delete
        this.app.delete('/api/status',
            function (req,res, next) {
                statusController.deleteStatus(req,res,next);
            }
        );
    }
}

module.exports = StatusRoute;