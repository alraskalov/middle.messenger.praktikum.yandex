import { HTTP, METHODS, Options } from './types';
import queryStringify from './utils';

const apiUrl = 'https://ya-praktikum.tech/api/v2';

export default class HTTPTransport {

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${apiUrl}${endpoint}`;
    }

  get: HTTP = (url = "/", options = {}) => this.request(
    this.endpoint + url,
    { ...options, method: METHODS.GET },
    options.timeout,
  );

  post: HTTP = (url, options = {}) => this.request(
      this.endpoint + url,
    { ...options, method: METHODS.POST },
    options.timeout,
  );

  put: HTTP = (url, options = {}) => this.request(
      this.endpoint + url,
    { ...options, method: METHODS.PUT },
    options.timeout,
  );

  delete: HTTP = (url, options = {}) => this.request(
      this.endpoint + url,
    { ...options, method: METHODS.DELETE },
    options.timeout,
  );

  public request = (url: string, options: Options = {}, timeout = 5000) => {
    const { method, data, headers = {} } = options;
    return new Promise((resolve, reject) => {

      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

        if (!(data instanceof FormData)) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        if (headers) {
            Object.entries(headers).forEach(([header, value]) => {
                xhr.setRequestHeader(header, value);
            });
        }

        xhr.onabort = reject;
        xhr.onerror = reject;
        xhr.timeout = timeout;
        xhr.ontimeout = reject;

        xhr.withCredentials = true;
        xhr.responseType = 'json';

        xhr.onload = () => {
            const { status, response } = xhr;

            if (status >= 200 && status <= 300) {
                resolve(response);
            } else {
                reject(response);
            }
        };

        if (method === METHODS.GET || !data) {
            xhr.send();
        } else {
            xhr.send((data instanceof FormData) ? data : JSON.stringify(data));
        }
    });
  };
}
