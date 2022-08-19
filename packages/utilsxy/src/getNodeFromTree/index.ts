/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function getNodeFromTree(
  target: Record<string, any>[] & Record<string, any>,
  mark: string | number,
  options?: Partial<Record<'idKey' | 'childrenKey', string>>
) {
  const copyTree = Array.isArray(target) ? Array.prototype.slice.call(target) : [target];
  const defaultOpts = Object.assign(
    {
      idKey: 'id',
      childrenKey: 'children',
    },
    options
  );
  const { idKey, childrenKey } = defaultOpts;

  while (copyTree.length) {
    const node = copyTree.shift();
    if (node[idKey] === mark) {
      return node;
    }
    if (node[childrenKey]) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }

  return null;
}
