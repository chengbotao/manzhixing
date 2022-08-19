/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function partial(fn: any, ...values: unknown[]) {
  const args = Array.prototype.slice.call(values);
  return function (this: unknown, ...values: unknown[]) {
    const lambdaArgs = Array.prototype.slice.call(values);
    Array.prototype.push.apply(args, lambdaArgs);
    return fn.apply(this, args);
  };
}
