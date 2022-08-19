/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function instanceOf<T extends new (...args: any[]) => void>(
  target: object,
  ctor: T
): boolean {
  let proto = Reflect.getPrototypeOf(target);
  while (proto) {
    if (proto === ctor.prototype) {
      return true;
    }
    proto = Reflect.getPrototypeOf(proto);
  }
  return false;
}
