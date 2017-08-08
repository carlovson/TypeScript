//// [duplicateLocalVariable2.ts]
export class TestCase {
    constructor (public name: string, public test: ()=>boolean, public errorMessageRegEx?: string) {
    }
}
export class TestRunner { 
    static arrayCompare(arg1: any[], arg2: any[]): boolean {
        return false;
    }

    public addTest(test: TestCase) {
    }
}

export var tests: TestRunner = (function () {
    var testRunner = new TestRunner();

    testRunner.addTest(new TestCase("Check UTF8 encoding",
        function () {
            var fb: any;
            fb.writeUtf8Bom();
            var chars = [0x0054];
            for (var i in chars) {
                fb.writeUtf8CodePoint(chars[i]);
            }
            fb.index = 0;
            var bytes = [];
            for (var i = 0; i < 14; i++) {
                bytes.push(fb.readByte());
            }
            var expected = [0xEF];
            return TestRunner.arrayCompare(bytes, expected);
        }));

    return testRunner;
})();

//// [duplicateLocalVariable2.js]
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true, writable: false, enumerable: false
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var TestCase = (function () {
        function TestCase(name, test, errorMessageRegEx) {
            this.name = name;
            this.test = test;
            this.errorMessageRegEx = errorMessageRegEx;
        }
        return TestCase;
    }());
    exports.TestCase = TestCase;
    var TestRunner = (function () {
        function TestRunner() {
        }
        TestRunner.arrayCompare = function (arg1, arg2) {
            return false;
        };
        TestRunner.prototype.addTest = function (test) {
        };
        __names(TestRunner.prototype, ["addTest"]);
        return TestRunner;
    }());
    exports.TestRunner = TestRunner;
    exports.tests = (function () {
        var testRunner = new TestRunner();
        testRunner.addTest(new TestCase("Check UTF8 encoding", function () {
            var fb;
            fb.writeUtf8Bom();
            var chars = [0x0054];
            for (var i in chars) {
                fb.writeUtf8CodePoint(chars[i]);
            }
            fb.index = 0;
            var bytes = [];
            for (var i = 0; i < 14; i++) {
                bytes.push(fb.readByte());
            }
            var expected = [0xEF];
            return TestRunner.arrayCompare(bytes, expected);
        }));
        return testRunner;
    })();
});
