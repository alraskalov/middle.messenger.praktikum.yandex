import Block from '../../../../utils/scripts/Block/Block';
import './chatList.scss';
import template from './chatList.template';

interface IProps {
  element: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ChatList extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
