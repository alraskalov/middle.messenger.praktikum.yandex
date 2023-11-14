import './input.scss';
import template from './input.template';
import Block from '../../utils/scripts/Block/Block';
import { Props } from '../../utils/scripts/Block/types';

interface IProps {
  labelText: string;
  inputType: string;
  inputName: string;
  inputValue: string;
  inputPlaceholder: string;
  error: string;
  attr?: {
    [key: string]: unknown;
  }
  events?: {
    [key: string]: (event: InputEvent) => void
  }
}
export default class Input extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  // componentDidUpdate(oldProps: Props, newProps: Props): boolean {
  //   return oldProps.error !== newProps.error || oldProps.inputValue !== newProps.inputValue;
  // }

  render() {
    return this.compile(template, this._props);
  }
}
