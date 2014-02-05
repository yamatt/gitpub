#!/bin/env node

var config = require("./config")(),
    db = require("./database")(config.database),
    express = require("express"),
    _ = require("underscore");

process.env.TZ = config.timezone;

function load_modules(module_paths) {
    var modules = [];
    _.each(module_paths, function(module_path) {
        var module = require(module_path);
        modules.push(module);
    });
    return modules;
}

function handle_message(source, message_object) {
    _.each(publishers, function (publisher) {
        if (publisher.match(source) {
            publisher.handle(source, message_object);
        }
    });
}

var server = express();

var publishers = load_modules(config.publishers);
var subcribers = load_modules(config.subscribers);

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
