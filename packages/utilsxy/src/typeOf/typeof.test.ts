/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { typeOf } from './index';

describe('typeOf module', () => {
  test('String', () => {
    expect(typeOf('chengbotao')).toEqual('string');
  });
  test('Number', () => {
    expect(typeOf(28)).toEqual('number');
  });
  test('Undefined', () => {
    expect(typeOf(undefined)).toEqual('undefined');
  });
  test('Boolean', () => {
    expect(typeOf(true)).toEqual('boolean');
  });
  test('BigInt', () => {
    expect(typeOf(BigInt(28))).toEqual('bigint');
  });
  test('Symbol', () => {
    expect(typeOf(Symbol('symbol'))).toEqual('symbol');
  });
  test('Function', () => {
    expect(
      typeOf(() => {
        return 'Function';
      })
    ).toEqual('function');
  });
  test('Null', () => {
    expect(typeOf(null)).toEqual('null');
  });
  test('Object', () => {
    expect(typeOf({})).toEqual('object');
  });
  test('Array', () => {
    expect(typeOf([])).toEqual('array');
  });
  test('Date', () => {
    expect(typeOf(new Date())).toEqual('date');
  });
  test('RegExp', () => {
    expect(typeOf(/test/)).toEqual('regexp');
  });
  test('Error', () => {
    expect(typeOf(new Error())).toEqual('error');
  });
  test('Promise', () => {
    expect(typeOf(Promise.resolve())).toEqual('promise');
  });
  test('Set', () => {
    expect(typeOf(new Set())).toEqual('set');
  });
  test('Map', () => {
    expect(typeOf(new Map())).toEqual('map');
  });
  test('WeakSet', () => {
    expect(typeOf(new WeakSet())).toEqual('weakset');
  });
  test('WeakMap', () => {
    expect(typeOf(new WeakMap())).toEqual('weakmap');
  });
  test('Generator', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(typeOf(function* () {})).toEqual('generatorfunction');
  });
});
