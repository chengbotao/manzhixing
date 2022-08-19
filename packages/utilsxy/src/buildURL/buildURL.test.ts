/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { buildURL } from './index';

describe('buildURL module', () => {
  test('只传 url', () => {
    expect(buildURL('http://botaoonline.com.cn/search')).toBe('http://botaoonline.com.cn/search');
  });

  test('传入带 hash 的 url', () => {
    expect(
      buildURL('http://botaoonline.com.cn/search#', {
        a: 1,
        b: 2,
      })
    ).toBe('http://botaoonline.com.cn/search?a=1&b=2');
  });

  test('传入带部分参数的 url', () => {
    expect(
      buildURL('http://botaoonline.com.cn/search?a=1', {
        b: 2,
      })
    ).toBe('http://botaoonline.com.cn/search?a=1&b=2');
  });

  test('传 params', () => {
    expect(
      buildURL('http://botaoonline.com.cn/search', {
        a: 1,
        b: 2,
      })
    ).toBe('http://botaoonline.com.cn/search?a=1&b=2');
  });

  test('传 params, URLSearchParams类型', () => {
    expect(
      buildURL(
        'http://botaoonline.com.cn/search',
        new URLSearchParams({
          a: '1',
          b: '2',
        })
      )
    ).toBe('http://botaoonline.com.cn/search?a=1&b=2');
  });

  test('传 paramsSerializer', () => {
    expect(
      buildURL(
        'http://botaoonline.com.cn/search',
        {
          a: 1,
          b: 2,
        },
        (params) => {
          const parts: string[] = [];
          Object.getOwnPropertyNames(params).forEach((key) => {
            const paramsVal = (params as Record<string, unknown>)[key];
            if (paramsVal === null || typeof paramsVal === 'undefined') return;
            parts.push(`${key}=${paramsVal}`);
          });
          return parts.join('&') + `&c=3`;
        }
      )
    ).toBe('http://botaoonline.com.cn/search?a=1&b=2&c=3');
  });
});
