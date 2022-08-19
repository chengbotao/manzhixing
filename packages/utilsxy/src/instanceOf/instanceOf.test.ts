/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { instanceOf } from './index';

describe('instanceOf module', () => {
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  const auto = new Car('Honda', 'Accord', 1998);

  test('{} instanceof Object', () => {
    expect(instanceOf({ a: 1 }, Object)).toEqual(true);
  });
  test('auto instanceof Car', () => {
    expect(instanceOf(auto, Car)).toEqual(true);
  });
  test('auto instanceof Object', () => {
    expect(instanceOf(auto, Object)).toEqual(true);
  });
});
