const User = require('./user/userModule');

class Modules {

    constructor(app){
        this.app = app;
        this.initModules();
    }

    initModules(){
        const moduleObject = new User(this.app);
    }
    // TODO: trying to load modules dynamically
    // refactore later
    /*    getTotalModules(){
     return this.modulesToInclude.length;
     }

     getModuleName(index){
     return this.modulesToInclude[index];
     }*/
}

module.exports = Modules;