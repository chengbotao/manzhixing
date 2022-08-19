/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function curry(fn: any, ...args: unknown[]) {
  const len = fn.length;
  return function (this: unknown, ...values: unknown[]) {
    const lambdaArgs = Array.prototype.slice.call(values);
    Array.prototype.push.apply(args, lambdaArgs);
    if (args.length < len) {
      return curry.call(this, fn, ...args);
    } else {
      return fn.apply(this, args);
    }
  };
}
