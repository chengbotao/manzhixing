/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
import { buildURL } from '../buildURL';

interface JsonpOpts {
  url: string;
  callbackName: string;
  callbackKey?: string;
  params?: any;
  paramsSerializer?: (params: any) => string;
}

declare global {
  interface Window {
    [key: string]: unknown;
  }
}

export function jsonp(options: JsonpOpts) {
  const { url, callbackKey = 'callback', callbackName, params, paramsSerializer } = options;
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script');
    scriptEl.src = `${buildURL(url, params, paramsSerializer)}&${callbackKey}=${callbackName}`;
    document.body.appendChild(scriptEl);
    window[callbackName] = (data: any) => {
      resolve(data);
      document.removeChild(scriptEl);
      delete window[callbackName];
    };
  });
}
