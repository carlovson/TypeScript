//// [arrayAssignmentTest4.ts]
class C3 {
    CM3M1() { return 3;}
}


/*

This behaves unexpectedly with teh following types:

Type 1 of any[]:

* Type 2 of the following throws an error but shouldn't: () => void[], SomeClass[], and {one: 1}[].

* Type 2 of the following doesn't throw an error but should: {one: 1}, new() => SomeClass, SomeClass.

*/
var c3 : C3 = new C3();
var o1 = {one : 1};

var arr_any: any[] = [];

arr_any = function () { return null;} // should be an error - is
arr_any = c3; // should be an error - is


//// [arrayAssignmentTest4.js]
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
var C3 = (function () {
    function C3() {
    }
    C3.prototype.CM3M1 = function () { return 3; };
    __names(C3.prototype, ["CM3M1"]);
    return C3;
}());
/*

This behaves unexpectedly with teh following types:

Type 1 of any[]:

* Type 2 of the following throws an error but shouldn't: () => void[], SomeClass[], and {one: 1}[].

* Type 2 of the following doesn't throw an error but should: {one: 1}, new() => SomeClass, SomeClass.

*/
var c3 = new C3();
var o1 = { one: 1 };
var arr_any = [];
arr_any = function () { return null; }; // should be an error - is
arr_any = c3; // should be an error - is
