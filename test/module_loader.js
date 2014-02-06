var ModuleLoader = require("../module_loader"),
    assert = require("assert");
    

describe('Module Loader', function(){
    describe('initialise', function(){
        it("should load successfully", function () {
            var module_loader_test = new ModuleLoader("test");
        });
    });
    
    describe('initialise multiple', function(){
        var module_loader_test_1 = new ModuleLoader("test");
        var module_loader_test_2 = new ModuleLoader("test");
        
        module_loader_test_1.modules.push("test");
        it("should not be the same object", function () {
            assert.notEqual(module_loader_test_1.modules, module_loader_test_2.modules);
        });
    });
    
    describe('loads module', function(){
        var test_module_name = "ml-test-module";
        var module_loader_test = new ModuleLoader("test");
        
        module_loader_test.load_module(test_module_name);
        it("should populate the module", function () {
            assert.ok(module_loader_test.modules);
        });
        it("should only have one module", function () {
            assert.equal(module_loader_test.modules.length, 1);
        });
        it("should contain the test module", function () {
            assert.equal(module_loader_test.modules[0].name, test_module_name);
        });
    });
});
