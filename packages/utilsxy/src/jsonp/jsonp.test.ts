/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { jsonp } from './index';

describe('jsonp module', () => {
  beforeEach(() => {
    // 在每个测试之前，清除之前的 JSONP 回调函数
    delete window.callback;
  });

  it('补充 jsonp 测试', () => {
    // 补充测试
    // 模拟 JSONP 请求
    // return jsonp({
    //   url: 'https://suggestion.baidu.com/su',
    //   callbackKey: 'cb',
    //   callbackName: 'callback',
    //   params: {
    //     wd: 'chengbotao',
    //   },
    // }).then((data) => {
    //   console.log(data);
    // });
  });
});
