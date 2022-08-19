/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */

import { isURLSearchParams } from '../isxxx';

export function buildURL(
  url: string,
  params?: Record<string, unknown> | URLSearchParams,
  paramsSerializer?: (params: Record<string, unknown> | URLSearchParams) => string
) {
  if (!params) return url;

  let serializerParams: string;
  if (paramsSerializer) {
    serializerParams = paramsSerializer(params);
  } else if (isURLSearchParams(params)) {
    serializerParams = params.toString();
  } else {
    const parts: string[] = [];
    Object.getOwnPropertyNames(params).forEach((key) => {
      const paramsVal = params[key];
      if (paramsVal === null || typeof paramsVal === 'undefined') return;
      let values: unknown[] = [];
      if (Array.isArray(paramsVal)) {
        values = paramsVal;
        key += '[]';
      } else {
        values = [paramsVal];
      }

      values.forEach((val: unknown) => {
        if (val instanceof Date) {
          val = val.toISOString();
        } else if (typeof val === 'object') {
          val = JSON.stringify(val);
        }
        parts.push(`${key}=${val}`);
      });
    });
    serializerParams = parts.join('&');
  }

  if (serializerParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializerParams;
  }

  return url;
}
