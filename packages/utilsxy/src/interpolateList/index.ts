/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { isEmpty } from '../isxxx';

export function interpolateList(
  message: string,
  values: unknown[] | Record<string, unknown>
): string {
  if (isEmpty(values)) {
    return message;
  }
  if (Array.isArray(values)) {
    return message.replace(/\{(\d+)\}/g, (match, index) => {
      const value = values[index] as string;
      return value !== undefined ? value : match;
    });
  }
  return message.replace(/\{([^}]+)\}/g, (match, key) => {
    const value = values[key] as string;
    return value !== undefined ? value : match;
  });
}
