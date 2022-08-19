/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { partial } from './index';

describe('partial module', () => {
  test('partial', () => {
    const fn = jest.fn();
    const partialFn = partial(fn, 1, 2, 3);
    partialFn(4, 5, 6);
    expect(fn).toBeCalledWith(1, 2, 3, 4, 5, 6);
  });
});
