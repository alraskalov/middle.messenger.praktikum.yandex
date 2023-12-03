import Block from '../../../../utils/scripts/Block/Block';
import './chatSidebar.scss';
import template from './chatSidebar.template';

interface IProps {
  search: Block;
  chatList: Block;
  button: Block;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ChatSidebar extends Block<IProps> {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
