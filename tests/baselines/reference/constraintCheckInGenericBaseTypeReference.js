//// [constraintCheckInGenericBaseTypeReference.ts]
// No errors
class Constraint {
    public method() { }
}
class GenericBase<T extends Constraint> {
    public items: any;
}
class Derived extends GenericBase<TypeArg> {

}
class TypeArg {
    public method() {
        Container.People.items;
    }
}

class Container {
    public static People: Derived
}

//// [constraintCheckInGenericBaseTypeReference.js]
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
// No errors
var Constraint = (function () {
    function Constraint() {
    }
    Constraint.prototype.method = function () { };
    __names(Constraint.prototype, ["method"]);
    return Constraint;
}());
var GenericBase = (function () {
    function GenericBase() {
    }
    return GenericBase;
}());
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(GenericBase));
var TypeArg = (function () {
    function TypeArg() {
    }
    TypeArg.prototype.method = function () {
        Container.People.items;
    };
    __names(TypeArg.prototype, ["method"]);
    return TypeArg;
}());
var Container = (function () {
    function Container() {
    }
    return Container;
}());
