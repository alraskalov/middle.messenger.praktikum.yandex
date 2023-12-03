export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Options = {
  method?: METHODS
  timeout?: number
  headers?: Record<string, string>
  data?: any
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;

export type HTTP = (url: string, options?: OptionsWithoutMethod) => Promise<unknown>;

export enum SocketEvent {
  Connected = 'connected',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}


