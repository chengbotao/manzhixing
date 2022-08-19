/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function isURLSearchParams(val: unknown): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams;
}

export function isFormData(val: unknown): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData;
}

export function isEmpty(values: unknown[] | Record<string, unknown>): boolean {
  if (Array.isArray(values)) {
    // 数组为空
    if (values.length > 0) return false;
  } else {
    // 对象为空
    for (const key in values) {
      return !!key && false;
    }
  }
  return true;
}

export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return Object.prototype.toString.call(val) === '[object Object]';
}
