/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function getType(value: unknown): string {
  if (typeof value === 'number') {
    return isNaN(value) ? 'NaN' : 'Number';
  }
  return Object.prototype.toString.call(value).replace(/^\[object (.+)\]$/, '$1');
}
