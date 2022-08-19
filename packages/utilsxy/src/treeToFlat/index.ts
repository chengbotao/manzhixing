/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

export function treeToFlat(
  target: Record<string, unknown> | Record<string, unknown>[],
  subsetKey = 'children'
) {
  const copyTree = Array.isArray(target) ? Array.prototype.slice.call(target) : [target];
  const flat = [];
  while (copyTree.length) {
    const node = copyTree.shift();
    const { [subsetKey]: children, ...rest } = node;
    flat.push(rest);
    if (children) {
      Array.prototype.push.apply(copyTree, node.children);
      // Array.prototype.unshift.apply(copyTree, node.children);
    }
  }
  return flat;
}
