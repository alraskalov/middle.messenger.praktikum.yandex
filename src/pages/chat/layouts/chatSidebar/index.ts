import Block from '../../../../utils/scripts/Block/Block';
import './chatSidebar.scss';
import template from './chatSidebar.template';


interface IProps {
  search: Block;
  chatList: Block;
  buttons: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
class ChatSidebar extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}


export default ChatSidebar
