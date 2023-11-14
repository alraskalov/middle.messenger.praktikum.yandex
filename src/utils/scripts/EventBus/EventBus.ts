export default class EventBus<T extends { [name: string]: unknown[] }> {
  private readonly listeners: {
    [K in keyof T]?: Array<(...args: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, callback: (...args: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off<K extends keyof T>(event: K, callback: (...args: T[K]) => void) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event as string}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit<K extends keyof T>(event: K, ...args: T[K]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event as string}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
