/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { parseURL } from './index';

describe('parseURL module', () => {
  test('获取 URL 的参数', () => {
    expect(parseURL('http://botaoonline.com.cn/search?a=1&b=2')).toEqual({
      a: '1',
      b: '2',
    });
  });
});
