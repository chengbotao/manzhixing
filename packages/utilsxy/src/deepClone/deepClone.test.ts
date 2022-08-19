/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { deepClone } from './index';

describe('deepClone module', () => {
  const map = new Map();
  map.set('name', 'chengbotao');

  const set = new Set();
  set.add('utilsxy');
  set.add('chengbotao');

  const testObj = {
    field: 1,
    fieldUn: undefined,
    fieldObj: {
      age: 28,
    },
    fieldArr: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    fun: () => {
      console.log('Hello Family!');
    },
    fun1: function (a: number, b: number) {
      return a + b;
    },
  };

  test('值类型', () => {
    expect(deepClone(testObj).field).toBe(1);
  });
  test('Map 类型', () => {
    expect(deepClone(testObj).map.get('name')).toBe('chengbotao');
  });
  test('Set 类型', () => {
    expect(deepClone(testObj).set.has('utilsxy')).not.toBeFalsy();
  });
  test('Symbol 类型', () => {
    expect(deepClone(testObj).symbol instanceof Symbol).toBe(true);
  });
  test('RegExp 类型', () => {
    expect(deepClone(testObj).reg instanceof RegExp).toBe(true);
  });
  test('Date 类型', () => {
    expect(deepClone(testObj).date instanceof Date).toBe(true);
  });
});
