var ModuleLoader = require("../module_loader"),
    assert = require("assert");

var module_loader_test_1 = new ModuleLoader({
    "dir": "tests",
    "app_name": "app"
});

module_loader_test_1.load_module("ml-test-module");

assert.ok(module_loader_test_1);
