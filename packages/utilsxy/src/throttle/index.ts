/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function throttle(
  fn: any,
  wait: number,
  options: {
    leading?: boolean;
    trailing?: boolean;
  } = {}
) {
  let previous = 0;
  let timer: ReturnType<typeof setTimeout> | null;
  const defaultOpts = Object.assign(
    {
      leading: false,
      trailing: true,
    },
    options
  );
  const lambda = function (this: any, ...values: any[]) {
    const now = Date.now();
    const args = Array.prototype.slice.call(values);
    if (!previous && !defaultOpts.leading) previous = now;
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      previous = now;
      fn.apply(this, args);
      // if (!timer) args = null;
    } else if (!timer && defaultOpts.trailing) {
      timer = setTimeout(() => {
        previous = defaultOpts.leading === false ? 0 : Date.now();
        timer = null;
        const args = Array.prototype.slice.call(values);
        fn.apply(this, args);
        // if (!timer) args = null;
      }, remaining);
    }
  };

  // 取消功能
  lambda.cancel = function () {
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = null;
    previous = 0;
  };

  return lambda;
}
