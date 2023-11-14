import './form.scss';
import template from './form.template';
import Block from '../../../../utils/scripts/Block/Block';

interface IProps {
  formTitle: string;
  wrapper: Array<Block>;
  attr?: {
    [key: string]: unknown;
  }
}
export default class Form extends Block {
  constructor(tag: string = 'div', _props: IProps) {
    super(tag, _props);
  }

  render() {
    return this.compile(template, this._props);
  }
}
