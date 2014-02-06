var _ = require("underscore"),
    path = require("path");

module.exports = function (dir, init_options) {
    var options = init_options || {
        "app_name": "app"
    }
    return {
        "modules": [],
        "load_module": function(name) {
            var module_path = path.join(__dirname, dir, name, options.app_name);
            var module = require(module_path);
            this.modules.push(module);
        },
        "load": function(modules) {
            var that = this;
            _.each(modules, function(module) {
                that.load_module(module.name);
            });
        }
    }
}
