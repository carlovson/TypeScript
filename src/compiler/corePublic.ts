namespace ts {
    // WARNING: The script `configurePrerelease.ts` uses a regexp to parse out these values.
    // If changing the text in this section, be sure to test `configurePrerelease` too.
    export const versionMajorMinor = "4.0";
    /** The version of the TypeScript compiler release */
    export const version = `${versionMajorMinor}.0-dev`;

    /**
     * Type of objects whose values are all of the same type.
     * The `in` and `for-in` operators can *not* be safely used,
     * since `Object.prototype` may be modified by outside code.
     */
    export interface MapLike<T> {
        [index: string]: T;
    }

    export interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
        " __sortedArrayBrand": any;
    }

    export interface SortedArray<T> extends Array<T> {
        " __sortedArrayBrand": any;
    }

    /** ES6 Map interface, only read methods included. */
    export interface ReadonlyMap<K, V> {
        readonly size: number;
        get(key: K): V | undefined;
        has(key: K): boolean;
        keys(): Iterator<K>;
        values(): Iterator<V>;
        entries(): Iterator<[K, V]>;
        forEach(action: (value: V, key: K) => void): void;
    }

    /** ES6 Map interface. */
    export interface Map<K, V> extends ReadonlyMap<K, V> {
        set(key: K, value: V): this;
        delete(key: K): boolean;
        clear(): void;
    }

    /* @internal */
    export interface MapConstructor {
        // eslint-disable-next-line @typescript-eslint/prefer-function-type
        new <K, V>(iterable?: readonly (readonly [K, V])[] | ReadonlyMap<K, V>): Map<K, V>;
    }

    export interface ReadonlySet<T> {
        readonly size: number;
        has(value: T): boolean;
        forEach(action: (value: T, key: T) => void): void;
        keys(): Iterator<T>;
        values(): Iterator<T>;
        entries(): Iterator<[T, T]>;
    }

    export interface Set<T> extends ReadonlySet<T> {
        add(value: T): this;
        delete(value: T): boolean;
        clear(): void;
    }

    /* @internal */
    export interface SetConstructor {
        // eslint-disable-next-line @typescript-eslint/prefer-function-type
        new <T>(iterable?: readonly T[] | ReadonlySet<T>): Set<T>;
    }

    export interface WeakMap<K extends object, V> {
        get(key: K): V | undefined;
        has(key: K): boolean;
        set(key: K, value: V): this;
        delete(key: K): boolean;
    }

    /* @internal */
    export interface WeakMapConstructor {
        // eslint-disable-next-line @typescript-eslint/prefer-function-type
        new <K extends object, V>(): WeakMap<K, V>;
    }

    export interface WeakSet<T extends object> {
        has(key: T): boolean;
        add(key: T): this;
        delete(key: T): boolean;
    }

    /* @internal */
    export interface WeakSetConstructor {
        // eslint-disable-next-line @typescript-eslint/prefer-function-type
        new <T extends object>(): WeakSet<T>;
    }

    /** ES6 Iterator type. */
    export interface Iterator<T> {
        next(): { value: T, done?: false } | { value: never, done: true };
    }

    /** Array that is only intended to be pushed to, never read. */
    export interface Push<T> {
        push(...values: T[]): void;
        /* @internal*/ readonly length: number;
    }

    /* @internal */
    export type EqualityComparer<T> = (a: T, b: T) => boolean;

    /* @internal */
    export type Comparer<T> = (a: T, b: T) => Comparison;

    /* @internal */
    export const enum Comparison {
        LessThan    = -1,
        EqualTo     = 0,
        GreaterThan = 1
    }

    namespace NativeCollections {
        declare const Map: MapConstructor | undefined;
        declare const Set: SetConstructor | undefined;
        declare const WeakMap: WeakMapConstructor | undefined;
        declare const WeakSet: WeakSetConstructor | undefined;

        export function tryGetNativeMap(): MapConstructor | undefined {
            // Internet Explorer's Map doesn't support iteration, so don't use it.
            // eslint-disable-next-line no-in-operator
            return typeof Map !== "undefined" && "entries" in Map.prototype && new Map([[0, 0]]).size === 1 ? Map : undefined;
        }

        export function tryGetNativeSet(): SetConstructor | undefined {
            // Internet Explorer's Set doesn't support iteration, so don't use it.
            // eslint-disable-next-line no-in-operator
            return typeof Set !== "undefined" && "entries" in Set.prototype && new Set([0]).size === 1 ? Set : undefined;
        }

        export function tryGetNativeWeakMap(): WeakMapConstructor | undefined {
            return typeof WeakMap !== "undefined" ? WeakMap : undefined;
        }

        export function tryGetNativeWeakSet(): WeakSetConstructor | undefined {
            return typeof WeakSet !== "undefined" ? WeakSet : undefined;
        }
    }

    /**
     * Returns the native Map implementation if it is available and compatible (i.e. supports iteration).
     */
    /* @internal */
    export function tryGetNativeMap() {
        return NativeCollections.tryGetNativeMap();
    }

    /**
     * Returns the native Set implementation if it is available and compatible (i.e. supports iteration).
     */
    /* @internal */
    export function tryGetNativeSet() {
        return NativeCollections.tryGetNativeSet();
    }

    /**
     * Returns the native WeakMap implementation if it is available.
     */
    /* @internal */
    export function tryGetNativeWeakMap() {
        return NativeCollections.tryGetNativeWeakMap();
    }

    /**
     * Returns the native WeakSet implementation if it is available.
     */
    /* @internal */
    export function tryGetNativeWeakSet() {
        return NativeCollections.tryGetNativeWeakSet();
    }
}