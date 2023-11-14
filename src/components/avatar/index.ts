import Block from '../../utils/scripts/Block/Block';
import './avatar.scss';
import template from './avatar.template';

interface IProps {
  src: string;
  attr?: {
    [key: string]: unknown;
  }
}
export default class Avatar extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
