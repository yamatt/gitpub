var Schema = require('jugglingdb').Schema;

module.exports = function (config) {
    var schema = new Schema(config.type, config.setup);

    // SUBSCRIBER
    var Subscriber = schema.define('Subscriber', {
        
    });
    
    // used for sql databases
    if (config.autoupdate) {
        schema.autoupdate();
    }
    
    return {
        "Subscriber": Subscriber
    }
}


