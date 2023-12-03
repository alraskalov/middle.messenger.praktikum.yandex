import Block from '../../../../utils/scripts/Block/Block';
import './chatInput.scss';
import template from './chatInput.template';
import messagesController from "../../../../controllerApi/Chat/MessageController.ts";
import connect from "../../../../utils/scripts/store/connect.ts";

interface IProps {
  inputName: string;
  inputType: string;
  inputValue: string;
  inputPlaceholder: string;
  isValid: boolean;
  attr?: {
    [key: string]: unknown;
  }
  events?: {
    [key: string]: (event: InputEvent) => void
  }
}
class ChatInput extends Block {
  constructor(tag: string = 'label', _props: IProps) {
    super(tag, _props);
  }

  sendMessage(value: string) {
    const chatId = this._props.selectedChat;
    if (value && chatId) {
      messagesController.sendMessage(chatId, value);
    }
  }

  render() {
    return this.compile(template, this._props);
  }
}
const withChats = connect((state) => ({chats: [...(state.chats || [])], selectedChat: state.selectedChat || null}));

export default withChats(ChatInput);
