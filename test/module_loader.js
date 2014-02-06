var ModuleLoader = require("../module_loader"),
    assert = require("assert");

var module_loader_test_1 = new ModuleLoader("test");

module_loader_test_1.load_module("ml-test-module");

assert.ok(module_loader_test_1);
