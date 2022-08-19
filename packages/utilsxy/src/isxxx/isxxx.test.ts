/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { isURLSearchParams, isEmpty, isFormData, isPlainObject } from './index';

describe('isxxx module', () => {
  test('isURLSearchParams', () => {
    expect(isURLSearchParams(new URLSearchParams())).toBeTruthy();
  });

  test('isEmpty', () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty({})).toBeTruthy();
  });

  test('isFormData', () => {
    const formData = new FormData();
    formData.append('username', 'Chris');
    expect(isFormData(formData)).toBeTruthy();
  });

  test('isPlainObject', () => {
    expect(isPlainObject({})).toBeTruthy();
    expect(isPlainObject([])).toBeFalsy();
  });
});
