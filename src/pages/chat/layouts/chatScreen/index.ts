import Block from '../../../../utils/scripts/Block/Block';
import './chatScreen.scss';
import template from './chatScreen.template';

interface IProps {
  avatar: Block;
  userName: string;
  safetyPinButton: Block;
  submitButton: Block;
  settingsButton: Block;
  input: Block
  attr?: {
    [key: string]: unknown;
  }
}
export default class ChatScreen extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
