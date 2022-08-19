/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function typeOf(operand: unknown): string {
  const toString = Object.prototype.toString;
  let type = toString.call(operand).split(' ')[1];
  type = type.substring(0, type.length - 1).toLowerCase();
  return type;
}
