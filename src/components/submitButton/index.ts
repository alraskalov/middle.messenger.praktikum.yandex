import './submitButton.scss';
import template from './submitButton.template';
import Block from '../../utils/scripts/Block/Block';

interface IProps {
  attr?: {
    [key: string]: unknown;
  }
  events?: {
    [key: string]: (event: InputEvent) => void
  }
}
export default class SubmitButton extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
