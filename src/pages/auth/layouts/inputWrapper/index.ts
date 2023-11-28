import Block from '../../../../utils/scripts/Block/Block';
import './inputWrapper.scss';
import template from './inputWrapper.template';

interface IProps {
  inputs: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class InputWrapper extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
