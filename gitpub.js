#!/bin/env node

var config = require("./config")(),
    ModuleLoader = require("module_loader"),
    db = require("./database")(config.database),
    express = require("express"),
    _ = require("underscore");

process.env.TZ = config.timezone;

function handle_message(source, message_object) {
    _.each(publishers.modules, function (publisher) {
        if (publisher.match(source) {
            publisher.handle(source, message_object);
        }
    });
}

var server = express();

var publishers = new ModuleLoader({"dir": "publishers"}).load(config.publishers);
var subcribers = new ModuleLoader({"dir": "subscribers"}).load(config.subscribers);

// setup clients
_.each(subcribers, function(subscriber) {
    // set up express apps
    if (subscriber.express) {
        server.use(
            "/" + subscriber_module.name,
            subscriber_module.app(
                config,
                db,
                handle_message
            )
        ); 
    }
    else {
        // set up non-express based subscribers
        subscriber.run(
            config,
            db,
            handle_message
        )
    }
});

if (!module.parent) {
    // being executed not used as module: setup express server.
    server.run(
        config.port,
        config.ip,
        function () {
            console.log("Server running on port: " + config.port)
        }
    );
}
module.exports = server;
