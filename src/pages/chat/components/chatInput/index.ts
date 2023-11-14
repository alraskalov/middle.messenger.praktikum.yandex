import Block from '../../../../utils/scripts/Block/Block';
import './chatInput.scss';
import template from './chatInput.template';

interface IProps {
  inputName: string;
  inputType: string;
  inputValue: string;
  inputPlaceholder: string;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ChatInput extends Block {
  constructor(tag: string = 'label', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
