/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { setValueByReference } from './index';

describe('setValueByReference module', () => {
  test('根据对象的引用设置值', () => {
    const obj = { a: 1, b: 2 };
    setValueByReference(obj, 'a', 3);
    expect(obj).toEqual({ a: 3, b: 2 });
  });

  test('根据对象的引用设置值, 传入数组', () => {
    const obj = { a: { b: 2 } };
    setValueByReference(obj, ['a', 'b'], 3);
    expect(obj).toEqual({ a: { b: 3 } });
  });

  test('根据对象的引用设置值, 传入字符串', () => {
    const obj = { a: { b: 2 } };
    setValueByReference(obj, 'a.b', 3);
    expect(obj).toEqual({ a: { b: 3 } });
  });
});
