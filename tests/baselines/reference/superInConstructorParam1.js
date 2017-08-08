//// [superInConstructorParam1.ts]
class B {
  public foo(): number {
    return 0;
  }
}

class C extends B {
  constructor(a = super.foo()) {
  }
}

//// [superInConstructorParam1.js]
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var B = (function () {
    function B() {
    }
    B.prototype.foo = function () {
        return 0;
    };
    __names(B.prototype, ["foo"]);
    return B;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C(a) {
        if (a === void 0) { a = _super.prototype.foo.call(_this); }
        var _this = this;
        return _this;
    }
    return C;
}(B));
