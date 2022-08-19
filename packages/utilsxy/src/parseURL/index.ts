/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
export function parseURL(url: string) {
  const instanceURL = new URL(url);
  const URLParams = instanceURL.search.slice(1);
  if (!URLParams) return null;
  const splitURLParams = URLParams.split('&');
  const params = Object.create(null);
  splitURLParams.forEach((param) => {
    if (param.includes('=')) {
      const [key, val] = param.split('=');
      params[key] = decodeURIComponent(val);
    } else {
      params[param] = true;
    }
  });
  return params;
}
