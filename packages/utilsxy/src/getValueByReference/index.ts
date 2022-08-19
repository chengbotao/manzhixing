/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function getValueByReference<T extends Record<string, any>>(
  target: T,
  refer: string | string[]
): any {
  const refers: string[] =
    typeof refer === 'string' ? (refer as string).split('.') : (refer as string[]);

  return refers.reduce((obj, key) => {
    return obj && obj[key];
  }, target);
}
