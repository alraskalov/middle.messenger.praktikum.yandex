import Block from '../../../../utils/scripts/Block/Block';
import './chatListElement.scss';
import template from './chatListElement.template';

interface IProps {
  avatar: Block;
  userName: string;
  userMessage: string;
  messageDate: Date | string;
  messageCount?: string;
  attr?: {
    [key: string]: unknown;
  }
  events?: {
    [key: string]: (event: InputEvent) => void
  }
}
export default class ChatListElement extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
