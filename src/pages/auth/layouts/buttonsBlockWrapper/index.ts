import Block from '../../../../utils/scripts/Block/Block';
import './buttonsBlockWrapper.scss';
import template from './buttonsBlockWrapper.template';

interface IProps {
  buttons: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class ButtonsBlockWrapper extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
