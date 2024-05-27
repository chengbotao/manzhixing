declare function isURLSearchParams(val: unknown): val is URLSearchParams;
declare function isFormData(val: unknown): val is FormData;
declare function isEmpty(values: unknown[] | Record<string, unknown>): boolean;
declare function isPlainObject(val: unknown): val is Record<string, unknown>;

declare function typeOf(operand: unknown): string;

declare function instanceOf<T extends new (...args: any[]) => void>(target: object, ctor: T): boolean;

declare function treeToFlat(target: Record<string, unknown> | Record<string, unknown>[], subsetKey?: string): any[];

declare function flatToTree(target: Record<string, unknown>[], options?: Partial<Record<'idKey' | 'pidKey' | 'childrenKey' | 'topVal', string>>): any[];

declare function curry(fn: any, ...args: unknown[]): (this: unknown, ...values: unknown[]) => any;

declare function buildURL(url: string, params?: Record<string, unknown> | URLSearchParams, paramsSerializer?: (params: Record<string, unknown> | URLSearchParams) => string): string;

interface JsonpOpts {
    url: string;
    callbackName: string;
    callbackKey?: string;
    params?: any;
    paramsSerializer?: (params: any) => string;
}
declare global {
    interface Window {
        [key: string]: unknown;
    }
}
declare function jsonp(options: JsonpOpts): Promise<unknown>;

declare function debounce(fn: any, wait: number, immediate?: boolean): {
    (this: unknown, ...values: unknown[]): void;
    cancel(): void;
};

declare function deepClone(target: any, map?: WeakMap<WeakKey, any>): any;

declare function getNodeFromTree(target: Record<string, any>[] & Record<string, any>, mark: string | number, options?: Partial<Record<'idKey' | 'childrenKey', string>>): any;

declare function getValueByReference<T extends Record<string, any>>(target: T, refer: string | string[]): any;

declare function setValueByReference(target: any, refer: string | string[], val: any): any;

declare function parseURL(url: string): any;

declare function partial(fn: any, ...values: unknown[]): (this: unknown, ...values: unknown[]) => any;

declare function throttle(fn: any, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): {
    (this: any, ...values: any[]): void;
    cancel(): void;
};

declare function interpolateList(message: string, values: unknown[] | Record<string, unknown>): string;

declare function getType(value: unknown): string;

export { buildURL, curry, debounce, deepClone, flatToTree, getNodeFromTree, getType, getValueByReference, instanceOf, interpolateList, isEmpty, isFormData, isPlainObject, isURLSearchParams, jsonp, parseURL, partial, setValueByReference, throttle, treeToFlat, typeOf };
