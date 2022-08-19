/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { debounce } from './index';
describe('debounce', () => {
  let mockFn: jest.Mock<unknown, any>;
  let debouncedFn: { (this: unknown, ...values: unknown[]): void; cancel(): void };

  beforeEach(() => {
    mockFn = jest.fn();
    debouncedFn = debounce(mockFn, 1000);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('防抖函数基本使用', () => {
    jest.useFakeTimers();

    debouncedFn(1, 2);
    debouncedFn(3, 4);
    debouncedFn(5, 6);

    jest.advanceTimersByTime(500);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledWith(5, 6);
    expect(mockFn).toBeCalledTimes(1);
  });

  test('终止函数防抖', () => {
    jest.useFakeTimers();

    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn.cancel();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toBeCalledTimes(0);
  });
});
