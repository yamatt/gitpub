var _ = require("underscore"),
    path = require("path");

module.exports = function (init_options) {
    var options = init_options || {
        "app_name": "app"
    }
    return {
        "modules": [],
        "load_module": function(name, module_options) {
            var module_path = path.join(__dirname, options.dir, name, options.app_name);
            var module = require(module_path);
            this.modules.push(module);
        },
        "load": function(modules, override_module_options) {
            _.each(modules, function(module) {
                var module_options = _.extend(module, override_module_options);
                this.load_module(module.name, module_options);
            });
        }
    }
}
