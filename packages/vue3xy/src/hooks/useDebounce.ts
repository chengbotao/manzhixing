/*
 * @Author: Chengbotao
 * @Date: 2022-11-24 20:31:12
 */
export function useDebounce(fn: any, wait: number, immediate = false) {
  let timer: ReturnType<typeof setTimeout> | null;
  const lambda = function (this: unknown) {
    // eslint-disable-next-line prefer-rest-params
    const args = Array.prototype.slice.call(arguments);
    if (timer) clearTimeout(timer as ReturnType<typeof setTimeout>);

    // 立即执行
    if (immediate) {
      const callNow = !timer;

      timer = setTimeout(() => {
        timer = null;
      }, wait);

      if (callNow) {
        fn.apply(this, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    }
  };

  // 取消功能
  lambda.cancel = function () {
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = null;
  };

  return lambda;
}
