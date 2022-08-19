/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function flatToTree(
  target: Record<string, unknown>[],
  options?: Partial<Record<'idKey' | 'pidKey' | 'childrenKey' | 'topVal', string>>
) {
  const copyFlat = Array.prototype.slice.call(target);
  const record: Record<string, unknown> = Object.create(null);
  const defaultOpts = Object.assign(
    {
      idKey: 'id',
      pidKey: 'pid',
      childrenKey: 'children',
      topVal: '',
    },
    options
  );
  const { idKey, pidKey, childrenKey, topVal } = defaultOpts;
  const tree = [];
  for (let i = 0, len = copyFlat.length; i < len; i++) {
    const item = copyFlat[i];
    const { [idKey]: idVal, [pidKey]: pidVal } = item;
    record[idVal] = item;

    if (pidVal && pidVal !== topVal) {
      if (pidVal in record) {
        const parentRecord = record[pidVal] as Record<string, unknown>;
        parentRecord[childrenKey] = parentRecord[childrenKey] || [];
        (parentRecord[childrenKey] as Record<string, unknown>[]).push(item);
      } else {
        console.error(`没有找到 id: ${pidVal} 顶级节点, 检查数据是否有误`);
      }
    } else {
      tree.push(item);
    }
  }
  return tree;
}
