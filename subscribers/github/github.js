var express = require('express'),
    _ = require("underscore"),
    config_file  = require(__dirname + "/config.json");

module.exports = {
    "name": "gitpub",
    "express": true,
    "app": function (config, db, callback) {
        config = config || {}
        config = _.extend(config, config_file);
        
        var app = express();
        
        app.use(express.bodyParser());
        
        app.post("/", function (req, res) {
            var source_url = JSON.parse(req.body.payload).repository.url;
            callback(source_url, req.body);
            res.send(200);
        });
        return app;
    }
};
