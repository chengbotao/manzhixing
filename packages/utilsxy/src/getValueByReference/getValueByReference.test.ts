/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { getValueByReference } from './index';

describe('getValueByReference module', () => {
  test('根据对象的引用获取值', () => {
    expect(getValueByReference({ name: 'chengbotao' }, 'name')).toBe('chengbotao');
  });

  test('根据对象的引用获取值, 传入数组', () => {
    expect(getValueByReference({ userInfo: { name: 'chengbotao' } }, ['userInfo', 'name'])).toBe(
      'chengbotao'
    );
  });

  test('根据对象的引用获取值, 传入字符串', () => {
    expect(getValueByReference({ userInfo: { name: 'chengbotao' } }, 'userInfo.name')).toBe(
      'chengbotao'
    );
  });
});
