/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { interpolateList } from './index';

describe('interpolateList module', () => {
  test('传入数组格式', () => {
    expect(interpolateList('{0} {1} {2}', ['a', 'b', 'c'])).toBe('a b c');
  });

  test('传入对象格式', () => {
    expect(interpolateList('{a} {c} {b}', { a: 'a', b: 'b', c: 'c' })).toBe('a c b');
  });
});
