/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function deepClone(target: any, map = new WeakMap()) {
  if (target === null || typeof target !== 'object') {
    return target;
  }

  if (map.get(target)) {
    return target;
  }

  const Ctor = target.constructor;
  const ctorName = Ctor.name;
  if (/^(RegExp|Date|Number|String|Boolean|Error)$/i.test(ctorName)) {
    return new Ctor(target);
  }

  if (ctorName === 'Symbol') {
    return Object(Object.prototype.valueOf.call(target));
  }

  if (ctorName === 'Map') {
    const cloneMap = new Map();
    map.set(target, true);
    target.forEach((value: unknown, key: unknown) => {
      cloneMap.set(deepClone(key, map), deepClone(value, map));
    });
    return cloneMap;
  }

  if (ctorName === 'Set') {
    const cloneSet = new Set();
    map.set(target, true);

    target.forEach((value: unknown) => {
      cloneSet.add(deepClone(value, map));
    });
    return cloneSet;
  }

  map.set(target, true);

  const cloneResult: Record<string, any> = Array.isArray(target) ? [] : {};

  Object.getOwnPropertyNames(target).forEach((key: string) => {
    cloneResult[key] = deepClone(target[key], map);
  });

  return cloneResult;
}
