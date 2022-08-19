/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function setValueByReference(target: any, refer: string | string[], val: any): any {
  const refers: string[] =
    typeof refer === 'string' ? (refer as string).split('.') : (refer as string[]);

  return (
    (refers.slice(0, -1).reduce((obj, key) => {
      return (obj[key] = obj[key] || {});
    }, target)[refers.pop() as string] = val),
    target
  );
}
