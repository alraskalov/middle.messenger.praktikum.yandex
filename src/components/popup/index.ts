import './popup.scss';
import template from './popup.template';
import Block from '../../utils/scripts/Block/Block';

interface IProps {
  element: Block;
  attr?: {
    [key: string]: unknown;
  }
}
export default class Popup extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
