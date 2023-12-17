import Block from '../../../../utils/scripts/Block/Block';
import './message.scss';
import template from './message.template.ts';

interface IProps {
  value: string[]
  attr?: {
    [key: string]: unknown;
  }
}
export default class Message extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
