import Block from '../../../../utils/scripts/Block/Block';
import './chatScreen.scss';
import template from './chatScreen.template';
import connect from "../../../../utils/scripts/store/connect.ts";
import isEqual from "../../../../utils/scripts/isEqual.ts";

interface IProps {
  avatar: Block;
  userName: string;
  safetyPinButton: Block;
  submitButton: Block;
  settingsButton: Block;
  listMessage: Block[];
  dropdowns: Block[];
  input: Block
  attr?: {
    [key: string]: unknown;
  }
}
class ChatScreen extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return isEqual(oldProps, newProps)
  }

  render() {
    return this.compile(template, this._props);
  }
}

const withChats = connect((state) => ({ chats: [...(state.chats || [])], selectedChat: state.selectedChat, messages: state.messages }));

export default withChats(ChatScreen)
