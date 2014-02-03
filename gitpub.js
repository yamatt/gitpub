#!/bin/env node

var config = require("./config.json"),
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

function handle_messages(source, message_object) {
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
    if (subscriber.express) {
        server.use(subscriber_module.route, subscriber_module.app()); // TODO: need to pass through publishers
    }
});

if (!module.parent) {
    // setup express server
}

