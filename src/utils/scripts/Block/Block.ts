import Handlebars from 'handlebars';
import EventBus from '../EventBus/EventBus';
import randomString from './utils';
import { Meta } from './types';

export default class Block<Props extends Record<string, any> = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  } as const;

  _props: Props;

  _children: Record<any, Block<Props>>;

  _lists: {
    [key: string]: Array<Block<Props>>
  };

  _id: string;

  _element: HTMLElement;

  _meta: Meta;

  _eventBus: EventBus<{ [name: string]: Props[] }>;

  _setUpdate = false;

  constructor(tag = 'div', propsAndChildren : Props) {
    const { children, props, lists } = this.getChildren(propsAndChildren);

    this._eventBus = new EventBus();
    this._id = randomString();
    this._children = this._makePropsProxy(children as Props);
    this._lists = this._makePropsProxy(lists as Props);
    this._props = this._makePropsProxy({ ...props, _id: this._id } as unknown as Props);
    this._element = this.createDocumentElement(tag);
    this._meta = {
      tag,
      props,
    };

    this._registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(): void {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private init(): void {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private createDocumentElement(tag: string): HTMLElement {
    const element: HTMLElement = document.createElement(tag) as HTMLElement;

    if (this._props.settings?.withInternalID) {
      element.setAttribute('data-id', this._id);
    }

    return element;
  }

  _render(): void {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block as unknown as Node);
    this.addEvents();
    this.addAttribute();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;

    Object.entries(attr).forEach(([key, value]) => {
      if (typeof value === 'string') {
        this._element.setAttribute(key, value);
      }
    });
  }

  getChildren(propsAndChildren: Props) {
    const children = {} as Record<string, unknown>;
    const props = {} as Record<string, unknown>;
    const lists = {} as Record<string, unknown>;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (key === null) {
        return;
      } else if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  compile(template: string, props: Props) {
    if (typeof (props) === 'undefined') {
      props = this._props;
    }

    const propsAndStubs = { ...props } as Record<string, unknown>;

    Object.entries(this._children as object).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this._lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="list-virtual-${key}"></div>`;
    });

    const fragment = document.createElement('template');

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    Object.entries(this._lists).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="list-virtual-${key}"]`);

      if (!stub) {
        return;
      }

      const listContent = document.createElement('template');

      child.forEach((item) => {
        if (item instanceof Block) {
          listContent.content.append(item.getContent());
        } else {
          listContent.content.append(`${item}`);
        }
      });

      stub.replaceWith(listContent.content);
    });

    return fragment.content;
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) => { child.dispatchComponentDidMount(); });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);

    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const isRender = this.componentDidUpdate(oldProps, newProps);
    if (isRender) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    return oldProps !== null && newProps !== null;
  }

  setProps(newProps: Props): void {
    if (!newProps) {
      return;
    }

    this._setUpdate = false;
    const oldValue = { ...this._props };

    const { children, props, lists } = this.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(lists).length) {
      Object.assign(this._lists, lists);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }

    if (this._setUpdate) {
      this._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
    }
  }

  private _makePropsProxy(props: Props) {
    return new Proxy(props, {

      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: (target, prop: string, value) => {
        if (target[prop] !== value) {
          target[prop as keyof Props] = value;
          this._setUpdate = true;
        }
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }

  getContent(): HTMLElement {
    return this._element;
  }
}
