/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { curry } from './index';

describe('curry module', () => {
  function add(a: number, b: number) {
    return a + b;
  }
  test('两数之和, 固定基数 1', () => {
    expect(curry(add, 1)(2)).toBe(3);
    expect(curry(add, 1)(3)).toBe(4);
  });
});
