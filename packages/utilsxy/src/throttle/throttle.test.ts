/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { throttle } from './index';

describe('throttle module', () => {
  let mockFn: jest.Mock<unknown, any>;
  let throttleFn: { (this: unknown, ...values: unknown[]): void; cancel(): void };

  beforeEach(() => {
    mockFn = jest.fn();
    throttleFn = throttle(mockFn, 1000);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('节流函数基本使用', () => {
    jest.useFakeTimers();
    throttleFn(1, 2);
    throttleFn(3, 4);
    throttleFn(5, 6);

    jest.advanceTimersByTime(500);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).toBeCalledWith(1, 2);
    expect(mockFn).toBeCalledTimes(1);
  });
  test('终止函数节流', () => {
    jest.useFakeTimers();

    throttleFn();
    throttleFn();
    throttleFn();
    throttleFn.cancel();

    jest.advanceTimersByTime(1000);
    expect(mockFn).toBeCalledTimes(0);
  });
});
