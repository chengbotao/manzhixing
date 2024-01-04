/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { getType } from './index';

describe('getType module', () => {
  test('String', () => {
    expect(getType('chengbotao')).toEqual('String');
  });
  test('Number', () => {
    expect(getType(28)).toEqual('Number');
  });
  test('Undefined', () => {
    expect(getType(undefined)).toEqual('Undefined');
  });
  test('Boolean', () => {
    expect(getType(true)).toEqual('Boolean');
  });
  test('BigInt', () => {
    expect(getType(BigInt(28))).toEqual('BigInt');
  });
  test('Symbol', () => {
    expect(getType(Symbol('symbol'))).toEqual('Symbol');
  });
  test('Function', () => {
    expect(
      getType(() => {
        return 'Function';
      })
    ).toEqual('Function');
  });
  test('NaN', () => {
    expect(getType(NaN)).toEqual('NaN');
  });
});
