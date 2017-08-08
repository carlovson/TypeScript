//// [privacyGloInterface.ts]
module m1 {
    export class C1_public {
        private f1() {
        }
    }


    class C2_private {
    }

    export interface C3_public {
        (c1: C1_public);
        (c1: C2_private);
        (): C1_public;
        (c2: number): C2_private;

        new (c1: C1_public);
        new (c1: C2_private);
        new (): C1_public;
        new (c2: number): C2_private;

        [c: number]: C1_public;
        [c: string]: C2_private;

        x: C1_public;
        y: C2_private;

        a?: C1_public;
        b?: C2_private;

        f1(a1: C1_public);
        f2(a1: C2_private);
        f3(): C1_public;
        f4(): C2_private;

    }

    interface C4_private {
        (c1: C1_public);
        (c1: C2_private);
        (): C1_public;
        (c2: number): C2_private;

        new (c1: C1_public);
        new (c1: C2_private);
        new (): C1_public;
        new (c2: number): C2_private;

        [c: number]: C1_public;
        [c: string]: C2_private;

        x: C1_public;
        y: C2_private;

        a?: C1_public;
        b?: C2_private;

        f1(a1: C1_public);
        f2(a1: C2_private);
        f3(): C1_public;
        f4(): C2_private;

    }
}

class C5_public {
    private f1() {
    }
}


interface C7_public {
    (c1: C5_public);
    (): C5_public;

    new (c1: C5_public);
    new (): C5_public;

    [c: number]: C5_public;

    x: C5_public;

    a?: C5_public;

    f1(a1: C5_public);
    f3(): C5_public;
}

module m3 {
    export interface m3_i_public {
        f1(): number;
    }

    interface m3_i_private {
        f2(): string;
    }

    interface m3_C1_private extends m3_i_public {
    }
    interface m3_C2_private extends m3_i_private {
    }
    export interface m3_C3_public extends m3_i_public {
    }
    export interface m3_C4_public extends m3_i_private {
    }

    interface m3_C5_private extends m3_i_private, m3_i_public {
    }
    export interface m3_C6_public extends  m3_i_private, m3_i_public {
    }
}

interface glo_i_public {
    f1(): number;
}

interface glo_C3_public extends glo_i_public {
}


//// [privacyGloInterface.js]
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
var m1;
(function (m1) {
    var C1_public = (function () {
        function C1_public() {
        }
        C1_public.prototype.f1 = function () {
        };
        __names(C1_public.prototype, ["f1"]);
        return C1_public;
    }());
    m1.C1_public = C1_public;
    var C2_private = (function () {
        function C2_private() {
        }
        return C2_private;
    }());
})(m1 || (m1 = {}));
var C5_public = (function () {
    function C5_public() {
    }
    C5_public.prototype.f1 = function () {
    };
    __names(C5_public.prototype, ["f1"]);
    return C5_public;
}());
